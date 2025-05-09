import React from 'react';

export const Skilled = ({ skill, percent }) => {
  const degree = (percent / 100) * 360;

  return (
    <div className="skill-circle flex flex-col items-center">
      <div className="relative w-[100px] h-[100px]">

        {/* Inner content (percent text) */}
        <div className="absolute inset-0 z-20 flex items-center justify-center font-bold text-white text-[18px]">
          {percent}%
        </div>

        {/* Inner dark ring */}
        <div className="absolute inset-[10px] rounded-full bg-black z-10"></div>

        {/* Progress ring (yellow border) */}
        <div
          className="absolute inset-0 rounded-full border-[10px] z-0"
          style={{
            maskImage: `conic-gradient(black ${degree}deg, transparent 0deg)`,
            WebkitMaskImage: `conic-gradient(black ${degree}deg, transparent 0deg)`,
            borderColor: '#f59e0b',
            borderStyle: 'solid',
          }}
        ></div>

        {/* Background ring (outer dark base) */}
        <div className="absolute inset-0 rounded-full border-[10px] border-neutral-800 z-[-1]"></div>
      </div>

      <span className="Skill-name text-white text-[18px] mt-3 mb-10">{skill}</span>
    </div>
  );
};
