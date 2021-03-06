import React, { ReactNode } from "react";
import Svg, { Path } from "react-native-svg"; 
import { Box, useTheme } from "../../components";

const Google = () => (

    <Svg width={20} height={20} viewBox="0 0 512 512" fill="none">
        <Path
        d="M492.668 211.489l-208.84-.01c-9.222 0-16.697 7.474-16.697 16.696v66.715c0 9.22 7.475 16.696 16.696 16.696h117.606c-12.878 33.421-36.914 61.41-67.58 79.194L384 477.589c80.442-46.523 128-128.152 128-219.53 0-13.011-.959-22.312-2.877-32.785-1.458-7.957-8.366-13.785-16.455-13.785z"
        fill="#167EE6"
      />
      <Path
        d="M256 411.826c-57.554 0-107.798-31.446-134.783-77.979l-86.806 50.034C78.586 460.443 161.34 512 256 512c46.437 0 90.254-12.503 128-34.292v-.119l-50.147-86.81c-22.938 13.304-49.482 21.047-77.853 21.047z"
        fill="#12B347"
      />
      <Path
        d="M384 477.708v-.119l-50.147-86.81c-22.938 13.303-49.48 21.047-77.853 21.047V512c46.437 0 90.256-12.503 128-34.292z"
        fill="#0F993E"
      />
      <Path
        d="M100.174 256c0-28.369 7.742-54.91 21.043-77.847l-86.806-50.034C12.502 165.746 0 209.444 0 256s12.502 90.254 34.411 127.881l86.806-50.034c-13.301-22.937-21.043-49.478-21.043-77.847z"
        fill="#FFD500"
      />
      <Path
        d="M256 100.174c37.531 0 72.005 13.336 98.932 35.519 6.643 5.472 16.298 5.077 22.383-1.008l47.27-47.27c6.904-6.904 6.412-18.205-.963-24.603C378.507 23.673 319.807 0 256 0 161.34 0 78.586 51.557 34.411 128.119l86.806 50.034c26.985-46.533 77.229-77.979 134.783-77.979z"
        fill="#FF4B26"
      />
      <Path
        d="M354.932 135.693c6.643 5.472 16.299 5.077 22.383-1.008l47.27-47.27c6.903-6.904 6.411-18.205-.963-24.603C378.507 23.672 319.807 0 256 0v100.174c37.53 0 72.005 13.336 98.932 35.519z"
        fill="#D93F21"
      />
        </Svg>
);

const Facebook = () => (
    <Svg width={20} height={20} viewBox="0 0 512 512" fill="none">
    <Path
        d="M134.941 272.691h56.123v231.051a8.256 8.256 0 008.258 8.258h95.159a8.256 8.256 0 008.258-8.258V273.78h64.519a8.26 8.26 0 008.204-7.315l9.799-85.061a8.259 8.259 0 00-8.202-9.203h-74.316V118.88c0-16.073 8.654-24.224 25.726-24.224h48.59a8.258 8.258 0 008.258-8.258V8.319a8.256 8.256 0 00-8.258-8.258h-66.965A65.863 65.863 0 00307.027 0c-11.619 0-52.006 2.281-83.909 31.63-35.348 32.524-30.434 71.465-29.26 78.217v62.352H134.94a8.256 8.256 0 00-8.258 8.258v83.975a8.26 8.26 0 008.259 8.259z"
        fill="#385C8E"
      />
  </Svg>
);

const Apple = () => (
    <Svg width={20} height={20} viewBox="0 0 22.773 22.773" fill="none">
    <Path
    d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573
    c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z
    M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334
			c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0
			c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019
			c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464
			c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648
			c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" 
    fill="#000"
    />
  </Svg>
);

interface SocialIconProps {
    children: ReactNode;
}

const SocialIcon = ({children}: SocialIconProps) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.l * 2;

    return (
        <Box 
        marginHorizontal="s"
          backgroundColor="white" 
          width={SIZE} 
          height={SIZE} 
          borderRadius="l"
          justifyContent="center"
          alignItems="center"
          >
              {children}
          </Box>
    )
}

const SocialLogin = () => {
    return (
      <Box flexDirection="row" justifyContent="center">
          <SocialIcon>
              <Google />
          </SocialIcon>
          <SocialIcon>
              <Facebook />
          </SocialIcon>
          <SocialIcon>
              <Apple />
          </SocialIcon>
      </Box>
    );
};

export default SocialLogin;
