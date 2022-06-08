import { ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Embed } from "../discord/types";
import useMessage from "../hooks/useMessage";
import StyledInput from "./StyledInput";

interface Props {
  index: number;
  embed: Embed;
}

export default function EditorEmbedImages({ index, embed }: Props) {
  const [collapsed, setCollapsed] = useState(true);
  const [, dispatch] = useMessage();

  return (
    <div>
      <div
        className="text-medium flex-auto cursor-pointer flex items-center space-x-2 text-gray-300 select-none"
        onClick={() => setCollapsed(!collapsed)}
      >
        <ChevronRightIcon
          className={`h-5 w-5 transition-transform duration-300 ${
            collapsed ? "" : "rotate-90"
          }`}
        />
        <div>Images</div>
      </div>
      {!collapsed ? (
        <div className="space-y-4 mt-3">
          <StyledInput
            label="Image URL"
            type="url"
            value={embed.image?.url || ""}
            onChange={(value) =>
              dispatch({
                type: "setEmbedImageUrl",
                value: value || undefined,
                index,
              })
            }
          />
          <StyledInput
            label="Thumbnail URL"
            type="url"
            value={embed.thumbnail?.url || ""}
            onChange={(value) =>
              dispatch({
                type: "setEmbedThumbnailUrl",
                value: value || undefined,
                index,
              })
            }
          />
        </div>
      ) : undefined}
    </div>
  );
}
