import * as React from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  // Handle submission of sign-up form
  const onSignUpPress = async () => {
    if (!isLoaded) return;
    if(!emailAddress || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
  }

    console.log(emailAddress, password);

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setPendingVerification(true);
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return;
    if(!code){
      Alert.alert("Error", "Please enter the verification code.");
      return;
  }


    setIsLoading(true);
    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }finally {
      // Reset loading state after the verification attempt
      setIsLoading(false);
    }
  };

  if (pendingVerification) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1 "
        >
          <View className="flex-1 justify-center px-6">
            <View className="flex-1 justify-center">
              {/* Logo Branding  */}

              <View className="items-center mb-8">
                <View className="w-20 h-20 items-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl  justify-center mb-4 drop-shadow-lg">
                  <Ionicons name="mail" size={40} color="white-50" />
                </View>

                <Text className="text-3xl font-bold text-gray-900 mb-2">
                  Check Your Email
                </Text>
                <Text className="text-lg text-gray-600 text-center">
                  We've sent a verification code to{"\n"}
                  {emailAddress}
                </Text>
              </View>

              {/* Verification form */}
              <View className="bg-white rounded-2xl p-6 shadow-sm border border-gray-600 mb-6">
                <Text className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Verify Your Email
                </Text>

                {/* Verification Code Input  */}
                <View className="mb-4">
                  <Text className="text-sm font-medium text-gray-700 mb-2">
                    Verification Code
                  </Text>
                  <View className="flex-row items-center bg-gray-50 rounded-xl px-2 py-2 border border-gray-200">
                    <Ionicons name="key-outline" size={20} color="#6B7280" />

                    <TextInput
                      autoCapitalize="none"
                      value={code}
                      placeholder="Enter your verification code"
                      placeholderTextColor="#9CA3AF"
                      onChangeText={(code) => setCode(code)}
                      className="flex-1 ml-3 text-gray-900"
                      keyboardType="numeric"
                    />
                  </View>
                </View>

                {/* Verify Button  */}
                <TouchableOpacity
                  onPress={onVerifyPress}
                  disabled={isLoading}
                  className={`shadow-sm rounded-xl py-4 ${
                    isLoading ? " bg-gray-400" : "bg-green-600"
                  }`}
                  activeOpacity={0.8}
                >
                  <View className="flex-row items-center justify-center">
                    {isLoading ? (
                      <Ionicons name="refresh" size={20} color="white" />
                    ) : (
                      <Ionicons
                        name="checkmark-circle-outline"
                        size={24}
                        color="white"
                      />
                    )}
                    <Text className="text-white ml-2 text-lg font-semibold">
                      {isLoading ? "Verifying..." : "Verify"}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <View className="flex-1 px-6">
          {/* Main */}

          <View className="flex-1 justify-center">
            {/* Logo Branding  */}

            <View className="items-center mb-8">
              <View className="w-20 h-20 items-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl  justify-center mb-4 drop-shadow-lg">
                <Ionicons name="fitness" size={40} color="white-50" />
              </View>

              <Text className="text-3xl font-bold text-gray-900 mb-2">
                Fitness Tracker
              </Text>
              <Text className="text-lg text-gray-600 text-center">
                start your fitness journey {"\n"} and achieve your goals
              </Text>
            </View>

            {/* sign up form  */}
            <View className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
              <Text className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Create Your Account
              </Text>

              {/* Email Input  */}
              <View className="mb-4">
                <Text className="text-sm font-medium text-gray-700 mb-2">
                  Email
                </Text>
                <View className="flex-row items-center bg-gray-50 rounded-xl px-2 py-2 border border-gray-200">
                  <Ionicons name="mail-outline" size={20} color="#6B7280" />

                  <TextInput
                    autoCapitalize="none"
                    value={emailAddress}
                    placeholder="Enter your email"
                    placeholderTextColor="#9CA3AF"
                    onChangeText={(email) => setEmailAddress(email)}
                    className="flex-1 ml-3 text-gray-900"
                    keyboardType="email-address"
                    editable={!isLoading}
                  />
                </View>
              </View>

              {/* Password Input  */}
              <View className="mb-4">
                <Text className="text-sm font-medium text-gray-700 mb-2">
                  Password
                </Text>
                <View className="flex-row items-center bg-gray-50 rounded-xl px-2 py-2 border border-gray-200">
                  <Ionicons
                    name="lock-closed-outline"
                    size={20}
                    color="#6B7280"
                  />

                  <TextInput
                    autoCapitalize="none"
                    value={password}
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    placeholderTextColor="#9CA3AF"
                    onChangeText={(email) => setPassword(email)}
                    className="flex-1 ml-3 text-gray-900"
                    editable={!isLoading}
                  />
                </View>
                <Text className="text-xs text-gray-500 mt-1 ml-1">
                  Must be at least 8 characters
                </Text>
              </View>

              {/* Sign up Button  */}

              <TouchableOpacity
                onPress={onSignUpPress}
                disabled={isLoading}
                className={`shadow-sm rounded-xl py-4 ${
                  isLoading ? " bg-gray-400" : "bg-blue-600"
                }`}
                activeOpacity={0.8}
              >
                <View className="flex-row items-center justify-center">
                  {isLoading ? (
                    <Ionicons name="refresh" size={20} color="white" />
                  ) : (
                    <Ionicons
                      name="person-add-outline"
                      size={24}
                      color="white"
                    />
                  )}
                  <Text className="text-white ml-2 text-lg font-semibold">
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Text>
                </View>
              </TouchableOpacity>

              {/* Terms */}
              <Text className="text-sm text-gray-500 mt-4 text-center">
                By signing up, you agree to our{" "}
                <Link href="/terms" className="text-blue-600">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-600">
                  Privacy Policy
                </Link>
              </Text>
            </View>

            {/* sign in link */}

            <View className="flex-row items-center justify-center ">
              <Text className="text-gray-600">Already have an account?</Text>
              <TouchableOpacity>
                <Link href="/sign-in">
                  <Text className="text-blue-600 font-semibold">Sign In</Text>
                </Link>
              </TouchableOpacity>
            </View>
          </View>

          {/* footer */}
          <View className="pb-6">
            <Text className="text-center text-gray-500 ">
              Ready to transform your fitness journey?{"\n"}
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
