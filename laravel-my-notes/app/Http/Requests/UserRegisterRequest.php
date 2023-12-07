<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Illuminate\Foundation\Http\FormRequest;

class UserRegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [
            'full_name' => ['required', 'string'],
            'email'     => ['required', 'string', 'max:255', Rule::unique('users')->ignore($this->id)],
            'mobile'     => ['required', 'string', 'max:255', Rule::unique('users')->ignore($this->id)],
            'gender'    => ['required', 'string'],
            'password'   => [
                'required', 'string', 'confirmed', Password::min(8)
            ],
            'password_confirmation' => ['required', Password::min(8)],
        ];

        return $rules;
    }
}
