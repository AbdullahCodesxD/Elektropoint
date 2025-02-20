import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { useNavigate, useParams } from "react-router";
import Button from "../../../../../components/Button";
import { BackSvg } from "../../../../../components/Svgs";
import TextEditor from "../../../../../components/TextEditor";
import CollectionConditions from "./CollectionConditions";
import CollectionProducts from "./CollectionProducts";
import CollectionAddImages from "./CollectionAddImages";
import { useEffect, useState } from "react";
import { postCollection } from "../../../../../utils/collectionApi";
import { getProducts } from "../../../../../utils/productsApi";
import { useSelector } from "react-redux";

export default function CollectionPage() {
  // const products = useSelector((state) => state.products.products);
  // const [selectedProducts, setSelectedProducts] = useState([]);
  const { collection: collectionId } = useParams();
  const collections = useSelector((state) => state.collections);
  const collection = collections.find(
    (collection) => collection._id === collectionId
  );
  const [matchCondition, setMatchCondition] = useState(false);

  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState([]);
  const [vendors, setVendors] = useState([]);
  const currentTitle = collection?.title || "New Collection";
  const currentDescription = collection?.description;
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
    content: currentDescription || "",
  });
  function goBack() {
    navigate(-1);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    return;
    const description = editor?.getHTML() || "";
    if (images.length === 0) return alert("Please add at least one image");
    formData.append("title", title);
    formData.append("description", description);
    if (vendors.length === 1) {
      vendors?.map((vendor) => formData.append("conditionVendors", vendor));
      formData.append("conditionVendors", "");
    } else if (vendors.length > 1) {
      vendors?.map((vendor) => formData.append("conditionVendors", vendor));
    }
    images.forEach((img) => formData.append("images", img));
    postCollection(formData);
  }

  useEffect(function () {
    getProducts();
  }, []);
  useEffect(() => {
    if (editor && currentDescription) {
      editor.commands.setContent(currentDescription);
    }
    if (collection?.conditionVendors.length > 0) {
      setVendors(collection.conditionVendors);
      setMatchCondition(true);
    }
    if (collection?.media) {
      setCurrentImage([...collection.media]);
    }
  }, [editor, currentDescription, collection?.conditionVendors]);
  return (
    <div className="bg-[#eaeaea] rounded-lg p-5 relative">
      <div className="flex items-center gap-3 mb-3">
        <Button handler={goBack}>
          <BackSvg height={15} />
        </Button>
        <h3 className="text-2xl font-semibold">Collections</h3>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col pb-[140px] md:pb-0 md:grid gap-3"
        style={{
          gridTemplateColumns: "calc(100% - 300px) 290px",
        }}
        encType="multipart/form-data"
      >
        <div className="flex flex-col gap-3 w-full">
          <div className="w-full p-[20px] bg-white rounded-lg shadow-md ">
            <label
              htmlFor="title"
              className="mt-1 pl-0.5 -mb-2 text-base font-medium"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              placeholder={currentTitle}
              onChange={(e) => setTitle(e.target.value)}
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
          </div>
          <div className="md:hidden">
            <CollectionAddImages
              currentMedia={currentImage}
              images={images}
              setImages={setImages}
            />
          </div>
          <CollectionConditions
            matchCondition={matchCondition}
            setMatchCondition={setMatchCondition}
            vendors={vendors}
            setVendors={setVendors}
          />
          {/* {!matchCondition && (
            <CollectionProducts
              setSelectedProducts={setSelectedProducts}
              selectedProducts={selectedProducts}
              products={products}
            />
          )} */}
        </div>

        <div className="hidden md:block">
          <CollectionAddImages images={images} setImages={setImages} />
        </div>

        <Button
          type="primary"
          extraClasses="max-w-fit px-5 text-[14px] ml-auto md:fixed bottom-5 right-5 transition-all hover:opacity-70"
        >
          Create Collection
        </Button>
      </form>
    </div>
  );
}
