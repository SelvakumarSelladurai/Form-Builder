import Preview from "../preview/Preview";

export default function MobilePreview({
  fields = [],
  checklistTitle = "Checklist Name",
}) {
  return (
    <div className="w-full flex justify-center items-start">

      <div
        className="relative bg-white rounded-[40px] shadow-2xl flex flex-col overflow-hidden border-2 border-black"
        style={{width: "280px",height: "560px",}}
      >

        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-3 rounded-b-xl bg-black"></div>

        <div className="pt-6 pb-4 text-center border-b bg-white">
          <h2 className="text-xl font-bold text-gray-900">
            {checklistTitle}
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto p-6 bg-gray-100 text-center">
          {fields.length === 0 ? (
            <>
              <p className="text-gray-500 text-lg mt-10">No fields added</p>
              <div className="flex justify-center mt-6">
                <div className="w-24 h-2 rounded-full bg-gray-300"></div>
              </div>
            </>
          ) : (
            <Preview fields={fields} />
          )}
        </div>

        <div className="py-4 flex justify-center bg-white">
          <div className="w-28 h-1.5 bg-gray-500 rounded-full"></div>
        </div>

      </div>
    </div>
  );
}
