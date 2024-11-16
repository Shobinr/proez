
const AddCase =() => {

      const caseDetailFields = [
       
        {
          label: "Case Title",
          type: "text",
          placeholder: "John",
          required: true,
          gridCols: 1,
        },
        {
            label: "Lawyer",
            type: "select",
            required: true,
            gridCols: 1,
            options:[
             
            ]
          },
          {
            label: "Case Type",
            type: "select",
            required: true,
            gridCols: 1,
            options:[
             
            ]
          },
       
        {
          label: "Starting Date",
          type: "date",
          placeholder: "MM/DD/YYYY",
          required: true,
          gridCols: 1,
        },
        {
            label: "Client",
            type: "select",
            required: true,
            gridCols: 1,
            options:[
             
            ]
          },
        
          {
            label: "Case Description",
            type: "Textarea",
            required: true,
            gridCols: 1,
            options:[
             
            ]
          },

      ];
    
    return(
      <div className="w-3/5 mx-2">
      <header className="text-center">
      <h2 className='text-2xl'>Add Cases</h2>
      </header>
      <form className="mt-10 grid grid-cols-2 gap-4 relative">
        {caseDetailFields.map((field, index) => (

        <div key={index} className={`col-span-${field.gridCols}`}>
        {field.type === "heading" && <h3 className="text-2xl font-bold">PersonalDetails</h3>}

        { field.type !=="heading" && <label htmlFor={field.label.toLowerCase().replace(" ", "-")} className=" block text-sm font-medium leading-6 text-gray-900">
        {field.label}
        </label>}
        <div className="mt-2">
        
        { field.type !== "radio" && field.type !== "select" && field.type !=="heading"  && ( <input
          id={field.label.toLowerCase().replace(" ", "-")}
          name={field.label.toLowerCase().replace(" ", "-")}
          type={field.type}
          placeholder={field.placeholder}
          required={field.required}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
        />)}
        
        {field.type === "radio" && field.options && (
        <div className="flex gap-x-4">
          {field.options.map((option, idx) => (
          <div key={idx} className="flex items-center gap-x-3">
          <input
          id={`${field.label.toLowerCase().replace(" ", "-")}-${option.toLowerCase()}`}
          name={field.label.toLowerCase().replace(" ", "-")}
          type="radio"
          value={option}
          required={field.required}
          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label htmlFor={`${field.label.toLowerCase().replace(" ", "-")}-${option.toLowerCase()}`} className="block text-sm font-medium leading-6 text-gray-900">
          {option}
          </label>
          </div>
          ))}
        </div>
        )}
        {field.type === "select" && field.options && (
          <select
          id={field.label.toLowerCase().replace(" ", "-")}
          name={field.label.toLowerCase().replace(" ", "-")}
          required={field.required}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
          {field.options.map((option, idx) => (
            <option key={idx} value={option.value}>
            {option.label}
            </option>
          ))}
          </select>
        )}

        </div>
        </div>
        ))}
        
      
        <div className="relative right-0 top-0 mt-4">
        <button type="submit" className="text-white dark:text-black dark:bg-white bg-black px-4 py-2 rounded-md mr-2">Save</button>
        <button type="button" className="text-white dark:text-black dark:bg-white bg-black px-4 py-2 rounded-md mr-2">Cancel</button>
        </div>
      </form>
     </div>
    )
}

export default AddCase;