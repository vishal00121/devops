import Card from "./Card";
import harshit from "./../../assets/harshit2.jpg";
import Webiner from "./Webiner";
import Sedulde from "./Sedulde";

function Homeview() {
  return (
    <div className="flex flex-col flex-grow min-h-screen">
      {/* Black Header */}
      <div className="h-36 bg-black ml-5 "></div>

      {/* Card & Schedule in One Row (Responsive) */}
      <div className="flex items-center xl:items-start flex-col xl:flex-row p-4">
        <Card 
          name="harshit" 
          email="harshitshulka6388@gmail.com" 
          img={harshit} 
        />

        <div className="mt-4 w-full mx-5 py-10 xl:py-0 space-y-4 xl:space-y-0">
          <p className="font-medium text-base text-headerText text-center xl:text-left">Sun Feb 16 2025</p>
          <p className="text-[#002B5B] font-semibold text-3xl text-center xl:text-left">Good Evening, Harshit! 👋</p>

          <div className="flex xl:items-start justify-between gap-8 w-full xl:flex-row flex-col-reverse items-center">
            <Webiner />
            <Sedulde />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homeview;
