<x-layout>
    <div class="w-full my-3">
        <div class="flex flex-col bg-white border shadow-sm rounded-xl">
            <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 flex justify-between items-center">
                <p class="mt-1 text-lg text-gray-500 font-semibold">
                    Edit Note
                </p>
                <a href="{{ route('dashboard.notes.index') }}"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                    Back
                </a>
            </div>

            <div class="p-4 md:p-5">
                <form action="{{ route('dashboard.notes.update', $note->id) }}" method="POST">
                    @csrf
                    @method('PUT')

                    <!-- Section -->
                    <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8">
                        <!-- End Col -->

                        <div class="sm:col-span-3">
                            <label for="title" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                Title
                            </label>
                        </div>
                        <!-- End Col -->

                        <div class="sm:col-span-9">
                            <input id="title" type="text" name="title"
                                class="py-2 px-3 pe-11 block w-full border border-gray-300 shadow-sm text-sm rounded-lg focus:border-gray-200 focus:ring-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Enter your note title..." value="{{ $note->title }}">
                        </div>
                        <!-- End Col -->

                        <div class="sm:col-span-3">
                            <div class="inline-block">
                                <label for="note_details" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                    Note Details
                                </label>
                            </div>
                        </div>
                        <!-- End Col -->

                        <div class="sm:col-span-9">
                            <textarea id="note_details" name="note_details"
                                class="py-2 px-3 block w-full border border-gray-300 rounded-lg text-sm focus:border-gray-200 focus:ring-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                                rows="6" placeholder="Add your note here...">{{ $note->note_details }}</textarea>
                        </div>
                        <!-- End Col -->
                    </div>
                    <!-- End Section -->

                    <button type="submit"
                        class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50">
                        Update Note
                    </button>
                </form>
            </div>
        </div>
    </div>
</x-layout>