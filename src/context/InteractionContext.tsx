import React from 'react';

interface InteractionContextType {
    interaction: { isScrolled: boolean; scrollStatus: number; isHovering: boolean; mouseX: number, mouseY: number, hoveredElement: string };
    setInteraction: React.Dispatch<React.SetStateAction<{ isScrolled: boolean; scrollStatus: number; isHovering: boolean; mouseX: number, mouseY: number, hoveredElement: string }>>;
}

const InteractionContext = React.createContext<InteractionContextType>({
  interaction: { isScrolled: false, scrollStatus: 0, isHovering: false, mouseX: 0, mouseY: 0, hoveredElement: "" },
  setInteraction: () => {}
});

export default InteractionContext;