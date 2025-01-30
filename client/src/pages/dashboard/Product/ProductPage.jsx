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
import { useEffect, useState } from "react";
import { getProducts, postProduct } from "../../../utils/productsApi";
import { useSelector } from "react-redux";

export default function ProductPage() {
  const { product: productTitle } = useParams();
  const products = useSelector((state) => state.products.products);
  const product = products.find(
    (product) =>
      product.title.toLowerCase().trim() === productTitle?.toLowerCase().trim()
  );

  const navigate = useNavigate();
  const editor = useEditor({
    // extensions: [StarterKit, Underline],
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),
      Underline,
    ],
    content: product?.description || "",
  });

  const [title, setTitle] = useState("");
  const [media, setMedia] = useState([]);

  const [status, setStatus] = useState("active");

  const [productType, setProductType] = useState("");
  const [vendor, setVendor] = useState("");
  const [collection, setCollection] = useState("");
  const [tags, setTags] = useState([]);

  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

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
    formData.append("metaTitle", metaTitle);
    formData.append("metaDescription", metaDescription);
    formData.append("productType", productType);
    formData.append("vendor", vendor);
    console.log(media, "media");
    postProduct(formData);
  }

  useEffect(
    function () {
      if (products.length === 0) {
        getProducts();
      }
    },
    [products.length]
  );
  useEffect(() => {
    if (editor && product?.description) {
      editor.commands.setContent(product.description);
    }
  }, [editor, product]);

  useEffect(() => {
    if (product) {
      setStatus(product.status);
      if (product.category.title) {
        setCollection(product.category.title);
      }
    }
  }, [product]);
  return (
    <div className="bg-[#eaeaea] rounded-lg p-5">
      {product && (
        <div className="mb-3 flex items-center gap-3">
          <Button handler={goBack}>
            <BackSvg color="#000" height={15} />
          </Button>

          <h4 className="capitalize font-semibold text-xl">{product.title}</h4>

          <Button extraClasses="capitalize bg-main px-5 py-1 rounded-md text-[14px] font-medium">
            {product.status}
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
              placeholder={product?.title || ""}
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

            <AddMedia
              currentMedia={product?.media}
              setMedia={setMedia}
              media={media}
            />
          </div>

          {/* <ProductVariants /> */}

          <SearchEngineListing
            setMetaTitle={setMetaTitle}
            metaTitle={metaTitle}
            currentTitle={product?.metaTitle}
            setMetaDescription={setMetaDescription}
            metaDescription={metaDescription}
            currentDescription={product?.metaDescription}
          />
        </div>

        <AddProductRightSide
          status={status}
          setStatus={setStatus}
          setVendor={setVendor}
          vendor={vendor}
          currentVendor={product?.vendor}
          collection={collection}
          setCollection={setCollection}
          tags={tags}
          setTags={setTags}
          currentTags={product?.tags}
          setProductType={setProductType}
          productType={productType}
          currentProductType={product?.productType}
        />

        <Button
          type="primary"
          extraClasses="max-w-fit px-5 text-[14px] fixed bottom-5 right-5 transition-all hover:opacity-70"
        >
          Update Product
        </Button>
      </form>
    </div>
  );
}
