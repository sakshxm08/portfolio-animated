import dottedPattern from "./dotted-pattern.svg";
import sakshamTransparent from "./saksham2-transparent.png";

import WearWorxLogo from "./projects/logos/wearworx.png";
import GitFolioLogo from "./projects/logos/gitfolio.jpeg";

import WearWorxPoster from "./projects/posters/wearworx.png";
import GitFolioPoster from "./projects/posters/gitfolio.png";
import PaymentPoster from "./projects/posters/payment.png";

const PROJECT_ASSETS = {
  wearworx: { logo: WearWorxLogo, poster: WearWorxPoster },
  gitfolio: { logo: GitFolioLogo, poster: GitFolioPoster },
  payment: { poster: PaymentPoster },
};
const logo =
  "https://s3.ap-south-1.amazonaws.com/assets.sakshxm08.in/sakshxm08-logo-transparent";
export { dottedPattern, sakshamTransparent, logo, PROJECT_ASSETS };
