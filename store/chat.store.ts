import { create } from "zustand"
import { persist, PersistOptions } from "zustand/middleware"

export interface IChatMessage {
    who: "CPE-GPT" | "me"
    message: string
}

interface IChatStore {
    chats: IChatMessage[]
    addChat: (chat: IChatMessage) => void
    clearChats: () => void
}

type IChatStorePersist = IChatStore

const useChatStore = create<IChatStorePersist>()(
    persist(
        (set) => ({
            chats: [],
            addChat: (chat) => set((state) => ({ chats: [...state.chats, chat] })),
            clearChats: () => set(() => ({ chats: [] })),
        }),
        {
            name: "chat-store",
        } as PersistOptions<IChatStore>
    )
)

export default useChatStore
