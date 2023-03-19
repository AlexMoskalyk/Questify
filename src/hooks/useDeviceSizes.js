import { useMediaQuery  } from 'react-responsive';
import DeviceSize from '../utils/index';

const useDeviceSizes = () => {
    const isMobileDevice = useMediaQuery({
      query: DeviceSize.Mobile
    });
  
    const isTabletDevice = useMediaQuery({
      query: DeviceSize.Tablet
    });
  
    const isDescDevice = useMediaQuery({
      query: DeviceSize.Desc
    });
  
    return { isMobileDevice, isTabletDevice, isDescDevice };
  };
  
  export default useDeviceSizes;