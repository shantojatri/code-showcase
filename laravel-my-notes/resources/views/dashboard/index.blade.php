<x-layout>
    <div class="w-full mt-3">
        <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold text-gray-700">All Notes</h2>
            <button>
                <i class="ri-add-circle-line ri-2x"></i>
            </button>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        @foreach ($notes as $note)
            <!-- Single Note item -->
            <div class="p-4 rounded-lg min-h-[280px] flex flex-col justify-between {{ $note->color_class }}">
                <!-- Note header -->
                <div>
                    <div class="flex items-start justify-between mb-2 gap-x-3">
                        <h3 class="text-xl font-bold">{{ $note->title }}</h3>
                        <div class="flex gap-x-1">
                            <button>
                                <i class="ri-edit-box-line ri-lg"></i>
                            </button>
                            <button>
                                <i class="ri-delete-bin-line ri-lg"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Notes content  -->
                    <p class="text-justify text-base font-normal">
                        {{ $note->note_details }}
                    </p>
                </div>
                <!-- Showing created at  -->
                <p class="text-md text-black mt-4">
                    Created:
                    <span class="font-semibold">{{ $note->created_at }}</span>
                </p>
            </div>
        @endforeach
    </div>
</x-layout>
