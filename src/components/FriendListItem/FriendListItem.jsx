import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({
	friend: {
		avatar,
		name,
		isOnline
	},
}) {
	const status = clsx(css.status, isOnline ? css.isOn : css.isOff)
	return (
		<div className={css.item}>
			<img src={avatar} alt="Avatar" width="48" />
			<p className={css.name}>{name}</p>
			<p className={status}>{isOnline ? "Online" : "Offline"}</p>
		</div>
	)

}



