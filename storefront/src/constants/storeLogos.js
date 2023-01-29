import { ReactComponent as SteamLogo }  from '../static/images/steam.svg';
import { ReactComponent as GOGLogo } from '../static/images/gog.svg';
import { ReactComponent as EpicLogo } from '../static/images/epic.svg';

export const STORE_LOGOS = {
    Steam: SteamLogo,
    GOG: GOGLogo,
    [`Epic Games Store`]: EpicLogo,
};

export const VIEW_BOXES = {
    GOG: '0 0 100 100',
    [`Epic Games Store`]: '200 0 400 400'
};