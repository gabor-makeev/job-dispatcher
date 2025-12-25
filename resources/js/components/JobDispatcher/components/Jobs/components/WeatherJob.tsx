import { Form } from "@inertiajs/react";

export default function() {


  	return (
		<div className="border rounded-2xl p-4">
			<span className="font-bold">⛅ Get Weather</span>
			<Form action="/weather" method="post" resetOnSuccess className="flex flex-col mt-2">
				<label htmlFor="weather-city">City</label>
				<input type="text" required placeholder="London" name="city" id="weather-city" className="border p-1" />
				<button type="submit" className='cursor-pointer mt-1 self-center duration-150 bg-gray-200 hover:bg-gray-300 p-0.5 rounded'>Submit</button>
			</Form>
		</div>
	)
}