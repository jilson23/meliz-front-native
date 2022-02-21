import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";

// Import required actions.
import {thumbnail, scale} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {source} from "@cloudinary/url-gen/actions/overlay";
import {opacity,brightness} from "@cloudinary/url-gen/actions/adjust";

// Import required qualifiers.
import {image} from "@cloudinary/url-gen/qualifiers/source";
import {Position} from "@cloudinary/url-gen/qualifiers/position";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
import { useSelector } from 'react-redux';

function ImageProfile(){
    const dataUser = useSelector(state => state.dataUser);

    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dw46hzlfr'
        }
      });
    
      const myImage = cld.image(dataUser.profilePhoto);
    
      myImage
      .resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face())))  // Crop the image.
      .roundCorners(byRadius(20))    // Round the corners.
      .overlay(   // Overlay the Cloudinary logo.
        source(
          image('cld-sample')
            .transformation(new Transformation()
            .resize(scale(50)) // Resize the logo.
              .adjust(opacity(60))  // Adjust the opacity of the logo.
            .adjust(brightness(200)))  // Adjust the brightness of the logo.       
        )
        .position(new Position().gravity(compass('south_east')).offsetX(5).offsetY(5))   // Position the logo.
      )
      .format('png');   // Deliver as PNG. */

    return(
        <AdvancedImage cldImg={myImage} />
    )
}

export default ImageProfile