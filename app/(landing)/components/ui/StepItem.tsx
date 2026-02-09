import PlaceholderImage from './PlaceholderImage';

interface StepItemProps {
  number: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}

export default function StepItem({
  number,
  title,
  description,
  imageSrc,
  imageAlt,
}: StepItemProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Texto - centralizado */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="bg-green-600 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
            <span className="text-2xl font-bold text-white">{number}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-slate-300 text-lg leading-relaxed">{description}</p>
      </div>

      {/* Imagem - largura total */}
      <div className="w-full">
        <div className="bg-slate-800/50 rounded-2xl p-2 md:p-4 border border-slate-700/50 shadow-xl">
          <PlaceholderImage
            src={imageSrc}
            alt={imageAlt}
            width={1400}
            height={800}
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
