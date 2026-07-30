/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  category: "ISO Standards" | "Quality Assurance" | "Operations & HR" | "Strategic Management";
  iconName: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  credentials: string[];
  experience: string;
  phone: string;
  email: string;
  secondaryEmail?: string;
  linkedin: string;
}

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface RegistrationInput {
  fullName: string;
  email: string;
  phone: string;
  interest: "Career Counselling" | "ISO Audit & Compliance" | "Quality Assurance Setup" | "Training & HRD" | "Other";
  educationBackground?: string;
  message?: string;
}

export interface PartnerRegistrationInput {
  fullName: string;
  email: string;
  phone: string;
  expertArea: string;
  yearsOfExperience: number;
  certifications: string;
  message?: string;
}
