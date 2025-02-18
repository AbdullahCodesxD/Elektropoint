import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextEditor from "../../../components/TextEditor";
// import { HTML } from "@tiptap/extension-html";

import AddMedia from "./AddMedia";
import AddProductRightSide from "./AddProductRightSide";
import ProductVariants from "./ProductVariants";
import SearchEngineListing from "./SearchEngineListing";
import { useNavigate, useParams } from "react-router";
import { BackSvg } from "../../../components/Svgs";
import Button from "../../../components/Button";
import { useState } from "react";
import { postProduct } from "../../../utils/productsApi";
import Customizable from "../Product/Customizable";

export default function AddProduct() {
  const { product } = useParams();
  const navigate = useNavigate();
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,

      // HTML.configure({ sanitize: false })
    ],
  });

  const [title, setTitle] = useState("");
  const [media, setMedia] = useState([]);

  const [status, setStatus] = useState("active");

  const [productType, setProductType] = useState("");
  const [vendor, setVendor] = useState("");
  const [collection, setCollection] = useState("");
  const [tags, setTags] = useState("");
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("");
  const [supplierNo, setSupplierNo] = useState("");
  const [eldasNo, setEldasNo] = useState("");

  const [customizable, setCustomizable] = useState(false);
  const [boxes, setBoxes] = useState(9);

  function goBack(e) {
    e.preventDefault();
    navigate(-1);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    media.forEach((media) => formData.append("images", media));
    formData.append("title", title);
    formData.append("description", editor?.getHTML());
    formData.append("tags", tags);
    formData.append("status", status);
    formData.append("category", collection);
    // formData.append("metaTitle", metaTitle);
    // formData.append("metaDescription", metaDescription);
    formData.append("productType", productType);
    formData.append("vendor", vendor);
    console.log(media, "media");
    postProduct(formData);
  }
  return (
    <div className="bg-[#eaeaea] rounded-lg pb-[50px] md:p-5">
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
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-col pb-[100px] md:grid md:pb-0 gap-3"
        style={{
          gridTemplateColumns: "1fr 290px",
        }}
      >
        <div className="flex flex-col gap-3">
          <div className="w-full p-[20px] bg-white rounded-lg shadow-md ">
            <label
              htmlFor="title"
              className="mt-1 pl-0.5 -mb-2 text-base font-medium"
            >
              Title
            </label>
            <input
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
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
          </div>

          {/* <ProductVariants /> */}

          <div className="p-5 bg-white rounded-md shadow-md">
            <div className="flex gap-2 items-start">
              <label className="pl-0.5 text-base font-medium">
                Customizable
              </label>

              <input
                id="checkbox"
                type="checkbox"
                checked={customizable}
                onChange={() => setCustomizable(!customizable)}
                className="h-5 w-5 appearance-none border-2 border-main rounded-md cursor-pointer checked:appearance-auto checked:accent-main checked:bg-main"
              />
            </div>
            {customizable && (
              <Customizable noOfBoxes={boxes} setNoOfBoxes={setBoxes} />
            )}
          </div>
          {/* <SearchEngineListing
            setMetaTitle={setMetaTitle}
            metaTitle={metaTitle}
            setMetaDescription={setMetaDescription}
            metaDescription={metaDescription}
          /> */}
        </div>

        <AddProductRightSide
          status={status}
          setStatus={setStatus}
          setVendor={setVendor}
          vendor={vendor}
          collection={collection}
          setCollection={setCollection}
          tags={tags}
          setTags={setTags}
          setProductType={setProductType}
          productType={productType}
          price={price}
          setPrice={setPrice}
          color={color}
          setColor={setColor}
          brand={brand}
          setBrand={setBrand}
          supplierNo={supplierNo}
          setSupplierNo={setSupplierNo}
          eldasNo={eldasNo}
          setEldasNo={setEldasNo}
        />

        <Button
          type="primary"
          extraClasses="max-w-fit px-5 text-[14px] ml-auto mr-5 lg:fixed bottom-5 right-5 transition-all hover:opacity-70"
        >
          Create Product
        </Button>
      </form>
    </div>
  );
}
