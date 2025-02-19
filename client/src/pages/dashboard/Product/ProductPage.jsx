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
import {
  getProducts,
  patchProductData,
  patchProductMedia,
} from "../../../utils/productsApi";
import { useSelector } from "react-redux";
import Customizable from "./Customizable";

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
  const [deleteImages, setDeleteImages] = useState([]);

  const [status, setStatus] = useState("active");

  const [productType, setProductType] = useState("");
  const [vendor, setVendor] = useState("");
  const [collection, setCollection] = useState("");
  const [tags, setTags] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("");
  const [supplierNo, setSupplierNo] = useState("");
  const [eldasNo, setEldasNo] = useState("");
  const [inventory, setInventory] = useState("");

  const [customizable, setCustomizable] = useState(false);
  const [boxes, setBoxes] = useState(9);

  // const [metaTitle, setMetaTitle] = useState("");
  // const [metaDescription, setMetaDescription] = useState("");

  function goBack(e) {
    e.preventDefault();
    navigate(-1);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    media.forEach((media) => formData.append("images", media));

    // // formData.append("category", collection);
    const data = {
      title,
      description: editor?.getHTML(),
      tags,
      status,
      productType,
      vendor,
      category: collection,
      price,
      color,
      brand,
      supplierNo,
      inventory,
      eldasNo,
    };
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(
        ([_, value]) => value !== undefined && value !== null && value !== ""
      )
    );

    if (filteredData.description == product?.description)
      delete filteredData.description;
    if (filteredData.status == product?.status) delete filteredData.status;
    if (filteredData.category === product?.category?.title)
      delete filteredData.category;

    if (Object.keys(filteredData).length > 0) {
      patchProductData(product._id, filteredData);
    }
    if (media.length > 0) {
      deleteImages.length > 0
        ? formData.append("orignal", false)
        : formData.append("orignal", true);
      patchProductMedia(product._id, formData);
    }
    // window.location.reload();
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
      if (product?.category?.title) {
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

          <h4 className="capitalize font-semibold text-xl">{product?.title}</h4>

          <Button extraClasses="capitalize bg-main px-5 py-1 rounded-md text-[14px] font-medium">
            {product?.status}
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
              setDeleteImages={setDeleteImages}
              deleteImages={deleteImages}
            />
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
            currentTitle={product?.metaTitle}
            setMetaDescription={setMetaDescription}
            metaDescription={metaDescription}
            currentDescription={product?.metaDescription}
          /> */}
        </div>

        <AddProductRightSide
          status={status}
          setStatus={setStatus}
          setVendor={setVendor}
          vendor={vendor}
          inventory={inventory}
          setInventory={setInventory}
          currentInventory={product?.inventory}
          currentVendor={product?.vendor}
          collection={collection}
          setCollection={setCollection}
          tags={tags}
          setTags={setTags}
          currentTags={product?.tags}
          setProductType={setProductType}
          productType={productType}
          currentProductType={product?.productType}
          price={price}
          setPrice={setPrice}
          currentPrice={product?.price}
          color={color}
          setColor={setColor}
          currentColor={product?.color}
          brand={brand}
          setBrand={setBrand}
          currentBrand={product?.brand}
          supplierNo={supplierNo}
          setSupplierNo={setSupplierNo}
          currentSupplierNo={product?.supplierNo}
          eldasNo={eldasNo}
          setEldasNo={setEldasNo}
          currentEldasNo={product?.eldasNo}
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
