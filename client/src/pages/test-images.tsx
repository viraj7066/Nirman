import dwarakaImage from "@assets/generated_images/dwaraka.png";
import vrindavanImage from "@assets/generated_images/vrinda.jpg";
import mangalumImage from "@assets/generated_images/Mangalum_project_building_exterior_1cf65600.png";

export default function TestImages() {
  console.log("Test images:", { dwarakaImage, vrindavanImage, mangalumImage });
  
  return (
    <div className="p-8">
      <h1>Test Image Loading</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h2>Dwaraka Image</h2>
          <img src={dwarakaImage} alt="Dwaraka" className="w-full h-48 object-cover" />
          <p className="text-sm">Path: {dwarakaImage}</p>
        </div>
        <div>
          <h2>Vrindavan Image</h2>
          <img src={vrindavanImage} alt="Vrindavan" className="w-full h-48 object-cover" />
          <p className="text-sm">Path: {vrindavanImage}</p>
        </div>
        <div>
          <h2>Mangalum Image</h2>
          <img src={mangalumImage} alt="Mangalum" className="w-full h-48 object-cover" />
          <p className="text-sm">Path: {mangalumImage}</p>
        </div>
      </div>
    </div>
  );
}