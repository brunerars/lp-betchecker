# Comandos SSH - Deploy BetChecker

Referência rápida dos comandos usados via SSH na VPS (`ssh root@72.60.56.189`).

---

## Clonar e Atualizar Código

```bash
# Clonar repo pela primeira vez
cd /tmp
git clone https://github.com/brunerars/v2-betchecker.git

# Atualizar código existente
cd /tmp/v2-betchecker
git pull
```

---

## Build de Imagens

```bash
# Ir para o diretório do projeto
cd /tmp/v2-betchecker/v1-style-betchecker

# Frontend V2 (com URL da API)
docker build --no-cache --build-arg NEXT_PUBLIC_API_URL=https://api-v3.betchecker.arvsystems.cloud -t betchecker-frontend-v3:latest -f frontend/Dockerfile.prod ./frontend

# Backend V2
docker build --no-cache -t betchecker-backend-v3:latest -f backend/Dockerfile.prod ./backend
```

> **Dica:** Use `--no-cache` quando o código mudou mas o Docker está usando cache antigo.
> Sem `--no-cache` o build é mais rápido quando não houve mudanças.

---

## Gerenciar Serviços (Force Update)

```bash
# Forçar update do frontend (após rebuild da imagem)
docker service update --force v2-betchecker_betchecker_v2_frontend

# Forçar update do backend (após rebuild da imagem)
docker service update --force v2-betchecker_betchecker_v2_backend
```

---

## Ver Stacks e Serviços

```bash
# Listar todas as stacks
docker stack ls

# Ver serviços da V2
docker service ls | grep v2

# Ver status detalhado dos serviços V2
docker stack services v2-betchecker

# Ver se algum serviço falhou (mostra erros)
docker service ps v2-betchecker_betchecker_v2_frontend --no-trunc
docker service ps v2-betchecker_betchecker_v2_backend --no-trunc
```

---

## Logs

```bash
# Logs do frontend (ao vivo)
docker service logs -f v2-betchecker_betchecker_v2_frontend

# Logs do backend (ao vivo)
docker service logs -f v2-betchecker_betchecker_v2_backend

# Últimas 50 linhas do backend
docker service logs --tail 50 v2-betchecker_betchecker_v2_backend
```

---

## Banco de Dados (PostgreSQL V2)

```bash
# Acessar psql interativo
docker exec -it $(docker ps -q -f name=v2-betchecker_betchecker_v2_db) psql -U betchecker -d betchecker

# Rodar SQL direto
docker exec -it $(docker ps -q -f name=v2-betchecker_betchecker_v2_db) psql -U betchecker -d betchecker -c "SELECT * FROM users;"

# Adicionar colunas (exemplo)
docker exec -it $(docker ps -q -f name=v2-betchecker_betchecker_v2_db) psql -U betchecker -d betchecker -c "
ALTER TABLE searches ADD COLUMN IF NOT EXISTS empate FLOAT;
ALTER TABLE searches ADD COLUMN IF NOT EXISTS vitoria_p1 FLOAT;
ALTER TABLE searches ADD COLUMN IF NOT EXISTS vitoria_p2 FLOAT;
ALTER TABLE searches ADD COLUMN IF NOT EXISTS jogos INTEGER;
"
```

---

## Redis V2

```bash
# Ver chaves em cache
docker exec -it $(docker ps -q -f name=v2-betchecker_betchecker_v2_redis) redis-cli KEYS "*"

# Ver sessões ativas
docker exec -it $(docker ps -q -f name=v2-betchecker_betchecker_v2_redis) redis-cli KEYS "session:*"

# Limpar todo o cache
docker exec -it $(docker ps -q -f name=v2-betchecker_betchecker_v2_redis) redis-cli FLUSHALL
```

---

## Verificar Imagens

```bash
# Listar imagens do betchecker
docker images | grep betchecker

# Verificar URL da API no frontend buildado
docker exec $(docker ps -q -f name=v2-betchecker_betchecker_v2_frontend) sh -c "grep -r 'api-v2' /app/.next/ | head -3"
```

---

## Limpeza

```bash
# Remover imagens sem tag (dangling)
docker image prune -f

# Limpeza completa (imagens, containers parados, etc)
docker system prune -f

# Ver espaço usado pelo Docker
docker system df
```

---

## Monitoramento da VPS

```bash
# Memória
free -h

# CPU e memória em tempo real
htop

# Espaço em disco
df -h
```

---

## Fluxo Completo de Deploy (após mudança no código)

```bash
# 1. Atualizar código
cd /tmp/v2-betchecker && git pull

# 2. Rebuild (frontend e/ou backend)
cd v1-style-betchecker
docker build --no-cache --build-arg NEXT_PUBLIC_API_URL=https://api-v2.betchecker.arvsystems.cloud -t betchecker-frontend-v2:latest -f frontend/Dockerfile.prod ./frontend
docker build --no-cache -t betchecker-backend-v2:latest -f backend/Dockerfile.prod ./backend

# 3. Update dos serviços
docker service update --force v2-betchecker_betchecker_v2_frontend
docker service update --force v2-betchecker_betchecker_v2_backend

# 4. Verificar logs
docker service logs --tail 20 v2-betchecker_betchecker_v2_backend

# 5. Limpar imagens antigas
docker image prune -f
```

---

## Landing Page - lp.betchecker.com.br

### Clonar LP

```bash
cd /tmp
git clone https://github.com/brunerars/lp-betchecker.git

# Atualizar código existente
cd /tmp/lp-betchecker
git pull
```

### Build da Imagem LP

```bash
cd /tmp/lp-betchecker

# Build com Facebook Pixel ID
docker build --no-cache \
  --build-arg NEXT_PUBLIC_FB_PIXEL_ID=1374452931031710 \
  -t betchecker-lp:latest \
  -f Dockerfile.prod .
```

### Deploy da Stack LP

```bash
# Primeira vez - deploy da stack
cd /tmp/lp-betchecker
docker stack deploy -c docker-compose.prod.yml betchecker-lp

# Verificar status
docker stack services betchecker-lp

# Ver logs
docker service logs -f betchecker-lp_betchecker_lp
```

### Update da LP (após mudanças)

```bash
# 1. Atualizar código
cd /tmp/lp-betchecker && git pull

# 2. Rebuild da imagem
docker build --no-cache \
  --build-arg NEXT_PUBLIC_FB_PIXEL_ID=1374452931031710 \
  -t betchecker-lp:latest \
  -f Dockerfile.prod .

# 3. Forçar update do serviço
docker service update --force betchecker-lp_betchecker_lp

# 4. Verificar logs
docker service logs --tail 30 betchecker-lp_betchecker_lp

# 5. Limpar imagens antigas
docker image prune -f
```

### Verificar LP

```bash
# Status do serviço
docker service ps betchecker-lp_betchecker_lp --no-trunc

# Testar endpoint (após DNS configurado)
curl -I https://lp.betchecker.com.br
```
