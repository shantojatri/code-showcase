<x-layout>
    <div class="w-full mt-3">
        <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold text-gray-700">All Notes</h2>
            <a href="{{ route('dashboard.notes.create') }}">
                <i class="ri-add-circle-line ri-2x"></i>
            </a>
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
                        <a href="{{ route('dashboard.notes.edit', $note->id) }}">
                            <i class="ri-edit-box-line ri-lg"></i>
                        </a>
                        <form action="{{ route('dashboard.notes.destroy', $note->id) }}" method="POST">
                            @csrf
                            @method('DELETE')

                            <button type="submit">
                                <i class="ri-delete-bin-line ri-lg"></i>
                            </button>
                        </form>
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
    <div class="hidden">
        <button class="bg-gray-200">item</button>
        <button class="bg-sky-200">item</button>
        <button class="bg-blue-200">item</button>
        <button class="bg-yellow-200">item</button>
        <button class="bg-green-200">item</button>
        <button class="bg-orange-200">item</button>
    </div>
</x-layout>