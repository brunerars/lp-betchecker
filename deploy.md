# Deploy BetChecker - Guia Prático

## Pré-requisitos

- [ ] Acesso ao Portainer (`https://portainer.arvsystems.cloud`)
- [ ] Acesso ao Cloudflare (DNS arvsystems.cloud)
- [ ] Repositório Git atualizado e público

---

## 1. Configurar DNS no Cloudflare

Acesse: **Cloudflare → arvsystems.cloud → DNS**

Adicionar os seguintes registros CNAME:

| Type | Name | Content | Proxy | TTL |
|------|------|---------|-------|-----|
| CNAME | betchecker | manager.arvsystems.cloud | DNS Only | Auto |
| CNAME | api.betchecker | manager.arvsystems.cloud | DNS Only | Auto |

**Importante:** Proxy deve estar **desligado** (DNS Only - nuvem cinza).

---

## 2. Gerar Secrets (uma vez)

Gere senhas fortes para produção:

```bash
# JWT Secret (copiar output)
openssl rand -hex 32

# DB Password (copiar output)
openssl rand -hex 16
```

Guarde esses valores - serão usados no Portainer.

---

## 3. Build das Imagens no Portainer

### 3.1 Build Frontend

Acesse: **Portainer → Images → Build Image**

| Campo | Valor |
|-------|-------|
| Name | `betchecker-frontend:latest` |
| Method | URL |
| URL | `https://github.com/brunerars/v1betchecker.git#main` |
| Dockerfile path | `frontend/Dockerfile.prod` |
| Node | manager1 |

Clique **Build Image**.

Sucesso quando aparecer:
```
Successfully tagged betchecker-frontend:latest
```

### 3.2 Build Backend

Acesse: **Portainer → Images → Build Image**

| Campo | Valor |
|-------|-------|
| Name | `betchecker-backend:latest` |
| Method | URL |
| URL | `https://github.com/brunerars/v1betchecker.git#main` |
| Dockerfile path | `backend/Dockerfile.prod` |
| Node | manager1 |

Clique **Build Image**.

Sucesso quando aparecer:
```
Successfully tagged betchecker-backend:latest
```

---

## 4. Deploy da Stack

Acesse: **Portainer → Stacks → Add Stack**

### 4.1 Configuração

| Campo | Valor |
|-------|-------|
| Name | `betchecker` |
| Build method | Repository |
| Repository URL | `https://github.com/brunerars/v1betchecker.git` |
| Reference | `main` |
| Compose path | `docker-compose.prod.yml` |

### 4.2 Environment Variables

Adicione as variáveis (clicar em "Add environment variable"):

| Name | Value |
|------|-------|
| DB_PASSWORD | `<senha-gerada-no-passo-2>` |
| JWT_SECRET | `<secret-gerado-no-passo-2>` |

### 4.3 Deploy

Clique **Deploy the stack**.

---

## 5. Verificar Deploy

### Via Portainer

1. **Stacks → betchecker** - verificar se todos os serviços estão "running"
2. **Services** - verificar réplicas 1/1 para cada serviço

### Via SSH

```bash
# Conectar no manager
ssh user@manager.arvsystems.cloud

# Ver status do stack
docker stack ps betchecker

# Ver logs do frontend
docker service logs -f betchecker_betchecker_frontend

# Ver logs do backend
docker service logs -f betchecker_betchecker_backend

# Testar endpoints
curl https://betchecker.arvsystems.cloud
curl https://api.betchecker.arvsystems.cloud/health
```

---

## 6. Troubleshooting

### Serviço não inicia

```bash
# Ver logs detalhados
docker service logs betchecker_betchecker_backend --tail 100

# Ver estado dos containers
docker service ps betchecker_betchecker_backend --no-trunc
```

### Erro de imagem não encontrada

Rebuildar a imagem no Portainer (Passo 3) antes de deployar.

### Erro de banco de dados

Verificar se o volume `betchecker_postgres_data` foi criado:
```bash
docker volume ls | grep betchecker
```

### SSL não funciona

1. Verificar se DNS propagou: `nslookup betchecker.arvsystems.cloud`
2. Verificar se Traefik está rodando: `docker service ls | grep traefik`
3. Ver logs do Traefik para erros de certificado

---

## 7. Atualizar Aplicação

Quando fizer alterações no código:

### 7.1 Push para Git

```bash
git add .
git commit -m "Update"
git push
```

### 7.2 Rebuild da Imagem

Portainer → Images → Build Image (repetir passo 3 para frontend/backend conforme necessário)

### 7.3 Forçar Update do Serviço

```bash
# Via SSH no manager
docker service update --force betchecker_betchecker_frontend
docker service update --force betchecker_betchecker_backend
```

Ou via Portainer: **Services → betchecker_frontend → Update service → Update**

---

## Checklist Final

- [ ] DNS configurado no Cloudflare (2 CNAMEs)
- [ ] Imagem frontend buildada com sucesso
- [ ] Imagem backend buildada com sucesso
- [ ] Stack deployada no Portainer
- [ ] Todos os 4 serviços rodando (frontend, backend, db, redis)
- [ ] https://betchecker.arvsystems.cloud acessível
- [ ] https://api.betchecker.arvsystems.cloud/health retorna OK
- [ ] Login/cadastro funcionando
- [ ] Busca de duplas funcionando
