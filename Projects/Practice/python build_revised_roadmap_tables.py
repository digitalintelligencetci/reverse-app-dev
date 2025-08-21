import csv, os, zipfile

# Output folder (change if you like)
OUTDIR = "out_revised_tables"
os.makedirs(OUTDIR, exist_ok=True)

# ----------------------------
# 1) Certifications (Revised)
# ----------------------------
certs_rows = [
    # Year 3
    ["Year 3 (2025–2026)", "Cellebrite CCO", "Mobile Forensics", "Core mobile device acquisition skills"],
    ["Year 3 (2025–2026)", "SANS SEC487 or Micah Hoffman OSINT", "OSINT", "Foundation in OSINT methodology"],

    # Year 4
    ["Year 4 (2026–2027)", "Cellebrite CCPA", "Mobile/Cloud Forensics", "Advanced mobile & cloud forensics"],
    ["Year 4 (2026–2027)", "MCFE", "Digital Forensics", "Magnet AXIOM for chat log/cloud recovery"],
    ["Year 4 (2026–2027)", "Bellingcat OSINT Workshop", "OSINT", "Verification & geolocation"],
    ["Year 4 (2026–2027)", "Cause Mapping RCA (optional)", "Root Cause Analysis", "Structured investigative analysis"],

    # Year 5
    ["Year 5 (2027–2028)", "Berla iVe Level 1", "Vehicle Forensics", "Vehicle infotainment system forensics"],
    ["Year 5 (2027–2028)", "ISO 27037/27041", "Evidence Handling", "Evidence handling & preservation"],
    ["Year 5 (2027–2028)", "CHFI", "Digital Forensics", "Computer hacking forensic investigation"],
    ["Year 5 (2027–2028)", "TapRooT Essentials RCA", "Root Cause Analysis", "Structured investigation methodology"],

    # Year 6
    ["Year 6 (2028–2029)", "CAA A2 CofC/GVC", "Drone Operations", "Drone operational licensing"],
    ["Year 6 (2028–2029)", "Pix4D Mapping Certification", "Drone Mapping", "Aerial mapping & 3D modelling"],
    ["Year 6 (2028–2029)", "CREST CROP", "OSINT", "Registered OSINT practitioner certification"],
    ["Year 6 (2028–2029)", "ICOR RCAP RCA", "Root Cause Analysis", "Crisis investigation & forensic readiness"],

    # Year 7 (Optional Advanced)
    ["Year 7 (2029–2030)", "Aviation Forensics Specialist", "Aviation Forensics", "Aircraft accident & flight data analysis"],
    ["Year 7 (2029–2030)", "Berla iVe Advanced", "Vehicle Forensics", "Advanced vehicle forensics"],

    # Year 8+
    ["Year 8+", "GIAC Cyber Threat Intelligence (GCTI)", "Threat Intelligence", "Advanced cyber threat intelligence"],
    ["Year 8+", "Advanced DF Lab Management (ISO/NIST)", "Lab Management", "DF lab management & quality standards"],
]
certs_path = os.path.join(OUTDIR, "Revised_Certifications.csv")
with open(certs_path, "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerow(["Year", "Certification", "Category", "Reason"])
    writer.writerows(certs_rows)

# ----------------------------
# 2) Services (Revised)
# ----------------------------
services_rows = [
    ["Year 3", "Cloud/Mobile Recovery", "Cellebrite CCO, SEC487/Micah Hoffman OSINT"],
    ["Year 4", "Advanced Chat Recovery", "Cellebrite CCPA, MCFE"],
    ["Year 4", "OSINT Verification", "Bellingcat Workshop"],
    ["Year 5", "Vehicle Forensics", "Berla iVe Level 1"],
    ["Year 5", "Litigation Support", "ISO 27037/27041, CHFI"],
    ["Year 5", "OSINT Investigations", "TapRooT RCA"],
    ["Year 6", "Drone Mapping", "CAA A2 CofC/GVC, Pix4D"],
    ["Year 6", "Corporate Breach Analysis", "CREST CROP, ICOR RCAP RCA"],
    ["Year 7+", "Aviation Forensics", "Aviation Forensics Specialist"],
    ["Year 7+", "Advanced Vehicle Telematics", "Berla iVe Advanced"],
    ["Year 8+", "Crisis Intelligence Consulting", "GCTI, DF Lab Management"],
]
services_path = os.path.join(OUTDIR, "Revised_Services.csv")
with open(services_path, "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerow(["Year", "Service", "Linked Certifications/Skills"])
    writer.writerows(services_rows)

# ----------------------------
# 3) Roadmap (Revised)
# ----------------------------
roadmap_rows = [
    ["Year 3", "Foundation & Academic Integration", "Parse CSV logs, basic OSINT web scraping", "Cellebrite CCO, SEC487/Micah Hoffman OSINT", "Cloud/mobile recovery, basic OSINT collection", "Continue MEng, dissertation planning"],
    ["Year 4", "Advanced Skills & Dissertation", "Image/video metadata extraction & mapping", "CCPA, MCFE, Bellingcat, Cause Mapping RCA", "Advanced chat recovery, OSINT verification", "Dissertation completion, crisis mapping prototype"],
    ["Year 5", "DFU Role & Pilot Services", "Automated keyword-tracking script for crisis OSINT", "Berla iVe L1, ISO 27037/27041, CHFI, TapRooT", "Vehicle forensics, litigation support, OSINT investigations", "Join Police DFU, pilot SaaS dashboard"],
    ["Year 6", "Soft Launch & Service Expansion", "Drone log parser & visualisation", "CAA A2 CofC, Pix4D, CREST CROP, ICOR RCAP RCA", "Drone mapping, corporate breach analysis", "Begin private cases under firm brand"],
    ["Year 7", "Full Launch", "Python case management tool for DF lab", "Aviation Forensics Specialist, Berla iVe Advanced", "Full DF services, OSINT SaaS", "Official firm launch"],
    ["Year 8+", "Post-Launch Expansion", "Custom DF/OSINT automation scripts", "GCTI, DF Lab Management", "International crisis intelligence consulting", "Hire investigators, expand to Caribbean market"],
]
roadmap_path = os.path.join(OUTDIR, "Revised_Roadmap.csv")
with open(roadmap_path, "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerow(["Year", "Focus", "Python Goal", "Certifications", "Services", "Career Milestones"])
    writer.writerows(roadmap_rows)

# ----------------------------
# 4) Bundle into a ZIP (optional)
# ----------------------------
zip_path = os.path.join(OUTDIR, "Revised_Roadmap_Tables.zip")
with zipfile.ZipFile(zip_path, "w") as z:
    z.write(certs_path, arcname="Revised_Certifications.csv")
    z.write(services_path, arcname="Revised_Services.csv")
    z.write(roadmap_path, arcname="Revised_Roadmap.csv")

print("Created:")
print(" -", certs_path)
print(" -", services_path)
print(" -", roadmap_path)
print("Zipped ->", zip_path)
