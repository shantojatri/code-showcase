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
        <!-- Single Note item -->
        <div class="p-4 rounded-lg min-h-[280px] flex flex-col justify-between bg-red-200">
            <!-- Note header -->
            <div>
                <div class="flex items-start justify-between mb-2 gap-x-3">
                    <h3 class="text-xl font-bold">Hello Dello</h3>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque consectetur sapiente velit non.
                    Quam, dolores incidunt autem ipsa dignissimos, adipisci sed ut aperiam, nostrum similique corrupti
                    vero aut ipsam.
                </p>
            </div>
            <!-- Showing created at  -->
            <p class="text-md text-black mt-4">
                Created:
                <span class="font-semibold">12/10/2023</span>
            </p>
        </div>

        <!-- Single Note item -->
        <div class="p-4 rounded-lg min-h-[280px] flex flex-col justify-between bg-red-200">
            <!-- Note header -->
            <div>
                <div class="flex items-start justify-between mb-2 gap-x-3">
                    <h3 class="text-xl font-bold">Hello Dello</h3>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque consectetur sapiente velit non.
                    Quam, dolores incidunt autem ipsa dignissimos, adipisci sed ut aperiam, nostrum similique corrupti
                    vero aut ipsam.
                </p>
            </div>
            <!-- Showing created at  -->
            <p class="text-md text-black mt-4">
                Created:
                <span class="font-semibold">12/10/2023</span>
            </p>
        </div>
    </div>
</x-layout>