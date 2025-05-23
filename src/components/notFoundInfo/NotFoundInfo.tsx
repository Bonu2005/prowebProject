import React from 'react';
const NotFoundInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-center px-4">
      <img
        src="https://www.zastavki.com/pictures/originals/2024/Cartoons_Character_Anxiety_of_the_new_cartoon_Puzzle_2_on_a_black_background__2024_171108_.jpg" 
        alt="Inside Out Sadness"
        className="w-[800px] -[500px] mb-6 rounded-xl shadow-lg "
      />
      <h2 className="text-2xl font-semibold text-blue-300 mb-2">
        Мы не нашли то, что вы искали...
      </h2>
      <p className="text-gray-400 mb-6 italic">
        Кажется, страница потерялась в сознании...  
        Может, Радость её найдёт позже 😊
      </p>
    </div>
  );
};

export default React.memo(NotFoundInfo);
