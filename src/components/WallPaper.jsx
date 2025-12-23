import wall from '../assets/wall 1.png';

function WallPaper() {
  return (
    <div className="w-full">
      <div>
        <img
          src={wall}
          alt="Wall Paper"
          className="w-full h-auto object-cover"
        />
      </div>
      {/* Decorative Separator */}
      <div className="bg-black h-[1.2vh] mt-6 w-full"></div>
    </div>
  );
}

export default WallPaper;
