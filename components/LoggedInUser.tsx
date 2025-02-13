"use client";

import placeholder from "../assets/placeholder.svg";
import { useSession } from "next-auth/react";

type LoggedInUserProps = {
    name?: string;
    avatar?: string;
};
export default function LoggedInUser(props: LoggedInUserProps) {
    const { data: session } = useSession();
    const userName = props.name ?? session?.user?.name ?? "User";
    const userAvatar = props.avatar ?? session?.user?.image ?? placeholder;
    return (
        <div className="sidebar-user flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="user-avatar">
                <img
                    src={userAvatar}
                    alt={userName}
                    className="avatar w-10 h-10 rounded-full object-cover"
                />
            </div>
            <div className="user-info hidden md:block">
                <p className="user-name">{userName}</p>
            </div>
        </div>
    )
}