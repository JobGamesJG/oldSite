import type { NextApiRequest, NextApiResponse } from "next";
import type { MinecraftListRaw } from "../../lib/types";
import axios from "axios";

const Minecraft = async (_: NextApiRequest, res: NextApiResponse) => {
	const response = await axios
		.get<MinecraftListRaw>(
			"https://sessionserver.mojang.com/session/minecraft/profile/05dee142-d122-41be-9a8c-d5433362c4b6"
		)
		.catch(() => null);

	if (!response) return res.status(200).json({ minecrafts: [] });

	const { data } = response;
	return res.status(200).json({
		data: {
			id: data.id,
			name: data.name,
			value: data.properties[0].value,
		},
	});
};

export default Minecraft;
