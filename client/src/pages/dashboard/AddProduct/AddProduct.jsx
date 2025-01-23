import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextEditor from "../../../components/TextEditor";
import AddMedia from "./AddMedia";
import AddProductRightSide from "./AddProductRightSide";
import ProductVariants from "./ProductVariants";
import SearchEngineListing from "./SearchEngineListing";
import { useNavigate, useParams } from "react-router";
import { BackSvg } from "../../../components/Svgs";
import Button from "../../../components/Button";
import { useState } from "react";

export default function AddProduct() {
  const { product } = useParams();
  const navigate = useNavigate();
  const editor = useEditor({
    extensions: [StarterKit, Underline],
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState([]);

  const [status, setStatus] = useState("active");
  const [vendor, setVendor] = useState("");
  const [collection, setCollection] = useState("");
  const [tags, setTags] = useState([]);

  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  function goBack(e) {
    e.preventDefault();
    navigate(-1);
  }
  return (
    <div className="bg-[#eaeaea] rounded-lg p-5">
      {product && (
        <div className="mb-3 flex items-center gap-3">
          <Button handler={goBack}>
            <BackSvg color="#000" height={15} />
          </Button>

          <h4 className="capitalize font-semibold text-xl">{product}</h4>

          <Button extraClasses="bg-main px-5 py-1 rounded-md text-[14px] font-medium">
            Active
          </Button>
        </div>
      )}
      <div
        className="flex flex-col pb-[100px] md:grid md:pb-0 gap-3"
        style={{
          gridTemplateColumns: "1fr 290px",
        }}
      >
        <div className="flex flex-col gap-3">
          <form
            encType="multipart/form-data"
            className="w-full p-[20px] bg-white rounded-lg shadow-md "
          >
            <label
              htmlFor="title"
              onChange={(e) => setTitle(e.target.value)}
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
                htmlFor="product-description"
                className="mt-1 pl-0.5 -mb-2 text-base font-medium"
              >
                Decription
              </label>
              <TextEditor editor={editor} />
            </div>

            <AddMedia setMedia={setMedia} media={media} />
          </form>

          <ProductVariants />

          <SearchEngineListing
            setMetaTitle={setMetaTitle}
            metaTitle={metaTitle}
            setMetaDescription={setMetaDescription}
            metaDescription={metaDescription}
          />
        </div>

        <AddProductRightSide
          status={status}
          setStatus={setStatus}
          vendor={vendor}
          setVendor={setVendor}
          collection={collection}
          setCollection={setCollection}
          tags={tags}
          setTags={setTags}
        />
      </div>
    </div>
  );
}
