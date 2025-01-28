import { EditorContent } from "@tiptap/react";
// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import Underline from "@tiptap/extension-underline";
// import { useState } from "react";

export default function TextEditor({ editor = {} }) {
  if (!editor) {
    return null;
  }
  // Function to get content from the editor
  // const getEditorContent = () => {
  //   if (editor) {
  //     const htmlContent = editor.getHTML();
  //     console.log(htmlContent); // This will log the HTML content
  //   }
  // };

  return (
    <>
      <div className="editor-container">
        {/* Toolbar */}
        <div className="editor-toolbar flex-wrap">
          {/* Bold */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "active" : ""}
          >
            <b>B</b>
          </button>

          {/* Italic */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "active" : ""}
          >
            <i>I</i>
          </button>

          {/* Underline */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive("underline") ? "active" : ""}
          >
            <u>U</u>
          </button>

          {/* Bullet List */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "active" : ""}
          >
            • List
          </button>

          {/* Ordered List */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "active" : ""}
          >
            1. List
          </button>

          {/* Paragraph */}
          <button
            type="button"
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive("paragraph") ? "active" : ""}
          >
            P
          </button>

          {/* Headings (h1 to h6) */}
          {[1, 2, 3, 4, 5, 6].map((level) => (
            <button
              type="button"
              key={level}
              onClick={() =>
                editor.chain().focus().toggleHeading({ level }).run()
              }
              className={editor.isActive("heading", { level }) ? "active" : ""}
            >
              H{level}
            </button>
          ))}
        </div>

        {/* Editor Content Area */}
        <div className="editor-content w-full h-[301px] overflow-y-auto">
          <EditorContent editor={editor} />
        </div>

        {/* Styles for the editor */}
        <style>{`
      .tiptap{
      border:none;
      outline:none;
      height:279px;
      padding-left:10px;
      
}
        .editor-container {
          border: 1px solid #d9d9d9;
          border-radius: 8px;
          padding: 10px;
          background-color: #fff;
          min-width:100%;
          outline:none;
          box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
        }

        .editor-toolbar {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
          border-bottom: 1px solid #e6e6e6;
          padding-bottom: 5px;
        }

        .editor-toolbar button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 16px;
          padding: 8px;
          color: #5c5f62;
          border-radius: 4px;
        }

        .editor-toolbar button.active{
            
        --tw-translate-x: 0%;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    
          color: #0070f3;
          background-color: #f1f5f9;
        }

        .editor-toolbar button:hover {
          background-color: #f1f1f1;
        }

        .editor-content {
          min-height: 200px;
          padding: 10px;
          border-radius: 4px;
          background-color: #fafafa;
          border: 1px solid #e1e3e5;
        }

      .editor-content h1 {
  font-size: 26px; /* Large heading */
  font-weight: bold;
}
          .editor-content::-webkit-scrollbar {
    width: 5px;
  }
  .editor-content::-webkit-scrollbar-track {
    background: #e0e0e0;
  }
  .editor-content::-webkit-scrollbar-thumb {
    background-color: #27348B;
    cursor: pointer;
  }

.editor-content h2 {
  font-size: 24px; /* Slightly smaller than h1 */
  font-weight: bold;
}

.editor-content h3 {
  font-size: 22px; /* Medium heading */
  font-weight: bold;
}

.editor-content h4 {
  font-size: 20px; /* Smaller heading */
  font-weight: bold;
}

.editor-content h5 {
  font-size: 18px; /* Sub-heading */
  font-weight: bold;
}

.editor-content h6 {
  font-size: 16px; /* Smallest heading */
  font-weight: bold;
}

.editor-content p {
  font-size: 14px; /* Regular paragraph */
  font-weight: normal;
}

      `}</style>
      </div>
    </>
  );
}
