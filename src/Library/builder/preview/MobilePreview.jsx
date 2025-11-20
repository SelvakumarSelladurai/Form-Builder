import Preview from "../preview/Preview";

export default function MobilePreview({
  fields = [],
  checklistTitle = "Checklist Name",
}) {
  return (
    <div className="w-full flex justify-center items-start">

      <div
        className="bg-white shadow-xl rounded-[40px] overflow-hidden flex flex-col"
        style={{
          width: "280px",
          height: "560px",
          borderRadius: "40px",
        }}
      >

        <div className="pt-6 pb-4 text-center border-b bg-white">
          <h2 className="text-xl font-bold text-gray-900">
            {checklistTitle}
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto p-6 bg-gray-100 text-center">
          {fields.length === 0 ? (
            <>
              <p className="text-gray-500 text-lg mt-10">
                No fields added
              </p>
              <div className="flex justify-center mt-6">
                <div className="w-24 h-2 rounded-full bg-gray-300"></div>
              </div>
            </>
          ) : (
            <Preview fields={fields} />
          )}
        </div>

        <div className="py-3 flex justify-center bg-white">
          <div className="w-24 h-1.5 bg-gray-400 rounded-full"></div>
        </div>

      </div>
    </div>
  );
}
