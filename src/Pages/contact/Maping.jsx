import mapimg from "../../assets/mapimg.png";

export default function Maping() {
  return (
    <div className="hidden md:block">
      <div className="sticky top-[72px] h-[calc(100vh-72px)]">
        <img
          src={mapimg}
          alt="Map location"
          className="w-full h-full object-cover p-6"
        />
      </div>
    </div>
  );
}
