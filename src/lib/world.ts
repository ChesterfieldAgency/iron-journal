import { ECellStatus, EKin, IDenizens, ILocation, IMap, IMapCell, INPC, ISite } from 'src/components/models';
import { NewProgressTrack } from './tracks';

export const NewNPC = (kin?: string): INPC => {
  return {
    name: '',
    kin: kin ? kin : EKin.Ironlander,
    bond: false,
    role: '',
    goal: '',
    descriptor: '',
    disposition: '',
    activity: '',
    notes: '',
    track: NewProgressTrack(),
  };
};

export const NewLocation = (): ILocation => {
  return {
    name: '',
    region: '',
    type: '',
    descriptor: '',
    trouble: '',
    notes: '',
  };
};

export const NewSite = (): ISite => {
  return {
    name: '',
    objective: '',
    theme: '',
    domain: '',
    track: NewProgressTrack(),
    notes: '',
    denizens: <IDenizens>{},
  };
};

export const NewCell = (id: string, name?: string): IMapCell => {
  return {
    id: id,
    name: name ? name : id,
    stat: ECellStatus.Empty,
    sites: [],
    locations: [],
    npcs: [],
  };
};

export const CellLabel = (c: IMapCell): string => {
  let label = c.name;
  if (c.npcs.length > 0) label = c.npcs[0].name;
  if (c.sites.length > 0) label = c.sites[0].name;
  if (c.locations.length > 0) label = c.locations[0].name;
  return label;
};

export const NewMap = (image: string, name?: string): IMap => {
  return {
    name: name ? name : '',
    image: image,
    height: 1100,
    width: 825,
    hexSize: 10,
    zoom: 1,
    fonts: {
      label: {
        size: 10,
      },
      search: {
        size: 8,
      },
    },
    notes: '',
    cells: {},
  };
};
