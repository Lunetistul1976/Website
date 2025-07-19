import { Typography } from "@mui/material";

export const Hero = () => {
  return (
    <div className="h-full w-full flex flex-col flex-1 ">
      <div className="w-full flex flex-col gap-[16] max-w-[512px]">
        <Typography variant="h4" color="textPrimary">
          Rareș-Sabin Vlad
        </Typography>

        <Typography variant="h6" color="textPrimary">
          Frontend Developer
        </Typography>

        <Typography variant="body1" color="textSecondary">
          I am a frontend developer with a passion for creating beautiful and
          functional user interfaces. I love working with React and TypeScript
          to build modern web applications.
        </Typography>
      </div>
    </div>
  );
};
