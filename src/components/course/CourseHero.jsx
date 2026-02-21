export default function CourseHero({ image, title, subtitle }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200">
      <div className="relative h-56 md:h-80">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white">
            {title}
          </h1>
          <p className="mt-2 text-white/90 text-sm md:text-base">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}