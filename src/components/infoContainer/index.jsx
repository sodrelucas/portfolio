export default function InfoContainer({
  Icon,
  iconBg = "#2C1F4C",
  iconColor = "#C084FC",
  title,
  desc,
}) {
  return (
    <div>
      <div className="h-[274px] w-sm bg-[#192233] flex flex-col gap-4 p-8 rounded-lg border-2 border-[#324467] max-[836px]:w-auto">
        <span
          className="w-fit p-2.5 rounded-lg"
          style={{ backgroundColor: iconBg }}
        >
          <Icon className=" text-3xl " style={{ color: iconColor }} />
        </span>
        <h4 className="text-white/80 font-bold text-lg">{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}
