import { create } from 'zustand';
interface DetailsModel {
	isOpen: boolean;
	onOpen: (isOpen: boolean) => void;
	onClose: () => void;
	id: number;
	setId: (id: number) => void;
	type: 'tv' | 'movie';
	setType: (type: 'tv' | 'movie') => void;
}

export const useDetailsModel = create<DetailsModel>((set) => ({
	isOpen: false,
	onOpen: (isOpen) => set({ isOpen }),
	onClose: () => set({ isOpen: false }),
	id: 0,
	setId: (id) => set({ id }),
	type: 'movie',
	setType: (type) => set({ type }),
}));
