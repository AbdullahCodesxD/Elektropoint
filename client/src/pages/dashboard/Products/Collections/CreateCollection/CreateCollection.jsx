import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { useNavigate } from "react-router";
import Button from "../../../../../components/Button";
import { BackSvg } from "../../../../../components/Svgs";
import TextEditor from "../../../../../components/TextEditor";
import CollectionConditions from "./CollectionConditions";
import CollectionProducts from "./CollectionProducts";
import CollectionAddImages from "./CollectionAddImages";

export default function CreateCollection() {
  const navigate = useNavigate();
  const editor = useEditor({
    extensions: [StarterKit, Underline],
  });

  function goBack() {
    navigate(-1);
  }
  return (
    <div className="bg-[#eaeaea] rounded-lg p-5 ">
      <div className="flex items-center gap-3 mb-3">
        <Button handler={goBack}>
          <BackSvg height={15} />
        </Button>
        <h3 className="text-2xl font-semibold">Collections</h3>
      </div>

      <div
        className="flex flex-col pb-[140px] md:pb-0 md:grid gap-3"
        style={{
          gridTemplateColumns: "1fr 290px",
        }}
      >
        <div className="flex flex-col gap-3">
          <form className="w-full p-[20px] bg-white rounded-lg shadow-md ">
            <label
              htmlFor="title"
              className="mt-1 pl-0.5 -mb-2 text-base font-medium"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              className="w-full px-3 py-2.5 rounded-lg outline-none border border-dark/60"
            />
            <div className="my-4">
              <label
                htmlFor="description"
                className="mt-1 pl-0.5 -mb-2 text-base font-medium"
              >
                Decription
              </label>
              <TextEditor editor={editor} />
            </div>
          </form>

          <CollectionConditions />

          <CollectionProducts />
        </div>

        <CollectionAddImages />
      </div>
    </div>
  );
}
