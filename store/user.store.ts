import { User } from "@/database/models/user"
import { Document } from "mongoose"
import { create } from "zustand"
import { persist, PersistOptions } from "zustand/middleware"

interface IUserStore {
    user: (User & Document) | null
    setUser: (user: IUserStore["user"]) => void
}

type IUserStorePersist = IUserStore

const useUserStore = create<IUserStorePersist>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set(() => ({ user })),
        }),
        {
            name: "user-store",
        } as PersistOptions<IUserStore>
    )
)

export default useUserStore
