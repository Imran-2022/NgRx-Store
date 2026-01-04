import { ChangeDetectionStrategy, Component } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { LucideAngularModule,Mail,Phone,User,MapPin } from "lucide-angular";

@Component({
  selector: 'app-profile',
  imports: [LucideAngularModule],
  template: `<div class="py-8 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold text-slate-900 mb-8">My Profile</h1>
    <div class="grid gap-6 md:grid-cols-3">
      <!-- Profile Card -->
      <div class="md:col-span-1">
        <div class="bg-white rounded-xl shadow-md p-6 text-center">
          <div
            class="size-24 mx-auto mb-4 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center"
          >
            <span class="text-3xl font-bold text-white uppercase">
              sd
            </span>
          </div>
          <h2 class="text-xl font-semibold text-slate-900 capitalize">
            sd
          </h2>
          <p class="text-slate-500">&#64;sd</p>
        </div>
      </div>

      <!-- Details Section -->
      <div class="md:col-span-2 space-y-6">
        <!-- Contact Information -->
        <div class="bg-white rounded-xl shadow-md p-6">
          <h3 class="text-lg font-semibold text-slate-900 mb-4">Contact Information</h3>
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="size-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                <lucide-icon [img]="icons.Mail" class="size-5 text-indigo-600" />
              </div>
              <div>
                <p class="text-sm text-slate-500">Email</p>
                <p class="font-medium text-slate-900">sd</p>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="size-10 rounded-lg bg-green-100 flex items-center justify-center">
                <lucide-icon [img]="icons.Phone" class="size-5 text-green-600" />
              </div>
              <div>
                <p class="text-sm text-slate-500">Phone</p>
                <p class="font-medium text-slate-900">sd</p>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="size-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <lucide-icon [img]="icons.User" class="size-5 text-amber-600" />
              </div>
              <div>
                <p class="text-sm text-slate-500">Username</p>
                <p class="font-medium text-slate-900">sd</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Address -->
        <div class="bg-white rounded-xl shadow-md p-6">
          <h3 class="text-lg font-semibold text-slate-900 mb-4">Address</h3>
          <div class="flex items-start gap-3">
            <div class="size-10 rounded-lg bg-rose-100 flex items-center justify-center shrink-0">
              <lucide-icon [img]="icons.MapPin" class="size-5 text-rose-600" />
            </div>
            <div>
              <p class="font-medium text-slate-900 capitalize">
                abvs
              </p>
              <p class="text-slate-500 capitalize">
                abv
              </p>
            </div>
          </div>
        </div>
      </div>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Profile {
    protected readonly icons = { Mail, Phone, User, MapPin };
}