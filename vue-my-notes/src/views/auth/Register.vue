<script setup lang="ts"></script>

<template>
  <div class="w-full max-w-2xl mx-auto p-6">
    <div class="flex h-full items-center py-8">
      <main class="w-full max-w-xl mx-auto p-6">
        <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm">
          <div class="p-4 sm:p-7">
            <div class="text-center">
              <h1 class="block text-2xl font-bold text-gray-800">Sign Up</h1>
              <p class="mt-2 text-sm text-gray-600">
                Have an account ?
                <RouterLink
                  class="text-blue-600 decoration-2 hover:underline font-medium"
                  to="/login"
                >
                  Sign in here
                </RouterLink>
              </p>
            </div>

            <div class="mt-5">
              <button
                type="button"
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              >
                <svg
                  class="w-4 h-auto"
                  width="46"
                  height="47"
                  viewBox="0 0 46 47"
                  fill="none"
                >
                  <path
                    d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                    fill="#34A853"
                  />
                  <path
                    d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                    fill="#EB4335"
                  />
                </svg>
                Sign in with Google
              </button>

              <div
                class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6"
              >
                Or
              </div>

              <!-- Form -->
              <form>
                <div class="grid gap-y-4">
                  <!-- Form Group -->
                  <div>
                    <label for="full-name" class="block text-sm mb-2"
                      >Full Name</label
                    >
                    <div class="relative">
                      <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Example: John Doe"
                        required
                      />
                    </div>
                  </div>
                  <!-- End Form Group -->

                  <!-- Form Group -->
                  <div>
                    <label for="mobile" class="block text-sm mb-2"
                      >Mobile Number</label
                    >
                    <div class="relative">
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Example: 017XX-XXXXXX"
                        required
                      />
                    </div>
                  </div>
                  <!-- End Form Group -->

                  <!-- Form Group -->
                  <div>
                    <label for="email" class="block text-sm mb-2"
                      >Email address</label
                    >
                    <div class="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Example: john.doe@app.com"
                        required
                      />
                    </div>
                    <p
                      class="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  </div>
                  <!-- End Form Group -->

                  <!-- Form Group -->
                  <div>
                    <label for="email" class="block text-sm mb-2">Gender</label>
                    <div class="relative">
                      <select
                        id="countries"
                        class="border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      >
                        <option selected>Choose a gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                      </select>
                    </div>
                    <p
                      class="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  </div>
                  <!-- End Form Group -->

                  <!-- Form Group -->
                  <div>
                    <div class="flex justify-between items-center">
                      <label for="password" class="block text-sm mb-2"
                        >Password</label
                      >
                    </div>
                    <div class="relative">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter your password..."
                        required
                      />
                    </div>
                    <p
                      class="hidden text-xs text-red-600 mt-2"
                      id="password-error"
                    >
                      8+ characters required
                    </p>
                  </div>
                  <!-- End Form Group -->

                  <!-- Form Group -->
                  <div>
                    <div class="flex justify-between items-center">
                      <label
                        for="password_confirmation"
                        class="block text-sm mb-2"
                        >Confirm Password</label
                      >
                    </div>
                    <div class="relative">
                      <input
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter your password again..."
                        required
                      />
                    </div>
                    <p
                      class="hidden text-xs text-red-600 mt-2"
                      id="password_confirmation-error"
                    >
                      8+ characters required
                    </p>
                  </div>
                  <!-- End Form Group -->

                  <!-- Checkbox -->
                  <div class="flex items-center">
                    <div class="flex">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500"
                        checked
                      />
                    </div>
                    <div class="ms-3">
                      <label for="remember-me" class="text-sm"
                        >Accept terms & conditions</label
                      >
                    </div>
                  </div>
                  <!-- End Checkbox -->

                  <button
                    type="submit"
                    class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <!-- End Form -->
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
