export interface EquipmentProperties {
  attack: number;
  defense: number;
}

export interface Data {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  hearts_recovered: number;
  properties?: EquipmentProperties;
  drops?: string[];
  cooking_effect?: string;
  edible?: boolean;
  value?: number;
  common_locations?: string[];
}
export interface ModalInfoProps {
  category: string;
  id: number;
  setModal: (isOpen: boolean) => void;
}

declare global {
  interface WindowEventMap {
    favoritesUpdated: CustomEvent;
  }
}
