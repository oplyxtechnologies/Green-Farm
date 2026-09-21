"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { createBrowserClient } from "@green-farm/db/client";
import {
  Button,
  Input,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@green-farm/ui";
import { Sprout, Lock, Mail, AlertCircle, Loader2, ArrowLeft } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get("returnTo") || "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const supabase = createBrowserClient();
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        throw authError;
      }

      if (data.session) {
        router.push(returnTo);
        router.refresh();
      }
    } catch (err: any) {
      setError(
        err.message ||
          "Failed to sign in. Please verify your credentials or Supabase environment variables."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-slate-200 bg-white shadow-crisp-md">
      <CardHeader className="space-y-1 pb-6">
        <CardTitle className="text-xl font-bold text-slate-900">Sign In</CardTitle>
        <CardDescription className="text-xs text-slate-500">
          Enter your authorized staff credentials to access the farm dashboard.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          {error && (
            <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-800">
              <AlertCircle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
              <Input
                required
                type="email"
                placeholder="admin@greennepalkrishi.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
              <Input
                required
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full mt-2 rounded-xl text-sm font-semibold"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Verifying Credentials...
              </>
            ) : (
              "Sign In to Dashboard"
            )}
          </Button>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-100 text-center">
          <a
            href="http://localhost:3000"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-krishi-brand transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Return to Public Website
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-slate-50">
      <div className="w-full max-w-md">
        {/* Farm Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-krishi-brand p-2.5 shadow-crisp-md mb-4">
            <Image
              src="/icon-white.svg"
              alt="Green Nepal Agricultural Farm Logo"
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Green Nepal Agricultural Farm
          </h1>
          <p className="text-xs uppercase tracking-widest text-slate-500 mt-1 font-semibold">
            Administrative Management Portal
          </p>
        </div>

        {/* Suspense boundary for useSearchParams */}
        <Suspense
          fallback={
            <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-sm text-slate-500">
              <Loader2 className="h-6 w-6 animate-spin mx-auto mb-2 text-krishi-brand" />
              Loading Login Portal...
            </div>
          }
        >
          <LoginForm />
        </Suspense>

        <p className="mt-8 text-center text-xs text-slate-500">
          Protected by Supabase Auth with Row Level Security (RLS).
        </p>
      </div>
    </div>
  );
}
