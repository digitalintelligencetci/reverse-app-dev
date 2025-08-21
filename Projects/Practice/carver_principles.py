# --- Carver Principles PDF generator ---
# Requires: pip install fpdf
# Usage: python carver_principles.py

from fpdf import FPDF
from datetime import datetime
import os

TITLE = "George Washington Carver Principles for Life & Work"
OUTPUT_PATH = "George_Washington_Carver_Principles.pdf"

PRINCIPLES_TEXT = """1. Purpose Over Profit
   - Focus on service and solving real problems before seeking wealth.
   - Let your work benefit as many people as possible.

2. Faith as a Foundation
   - Begin each day with prayer, reflection, or meditation.
   - See your talents as gifts to steward, not possessions to hoard.

3. Lifelong Curiosity
   - Remain a student forever; explore new ideas without fear.
   - Value the process of discovery as much as the results.

4. Simplicity in Living
   - Live within your means and avoid unnecessary excess.
   - Use resources wisely and creatively.

5. Generosity of Knowledge
   - Share insights freely; empower others rather than guard secrets.
   - Mentor, teach, and guide those who come after you.

6. Persistence Through Obstacles
   - Overcome challenges with patience and creativity.
   - Remember: limitations can be the mother of invention.

7. Integrity in Work
   - Stay true to your values even when opportunities for quick gain arise.
   - Let quality and ethics be your reputation.

8. Service to Community
   - Align your skills with the needs of others.
   - Seek to leave your environment better than you found it.
"""

CARVER_QUOTE = (
    "“It is not the style of clothes one wears, neither the kind of automobile one drives, "
    "nor the amount of money in the bank that counts. These mean nothing. "
    "It is simply service that measures success.”"
)

def clean_text(text: str) -> str:
    """Replace smart quotes/dashes with ASCII for FPDF's Latin-1 encoder."""
    replacements = {
        "–": "-", "—": "-",
        "“": '"', "”": '"',
        "‘": "'", "’": "'",
        "…": "...",
        "\u00a0": " ",          # non-breaking space
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    return text

class Sheet(FPDF):
    def header(self):
        self.set_font("Arial", "B", 16)
        self.set_fill_color(230, 240, 255)
        self.cell(0, 12, TITLE, align="C", fill=True)
        self.ln(14)

    def footer(self):
        self.set_y(-15)
        self.set_font("Arial", "", 9)
        self.set_text_color(120, 120, 120)
        self.cell(0, 10, f"Generated {datetime.now().strftime('%Y-%m-%d')}", align="R")

    def section_title(self, text: str):
        self.set_font("Arial", "B", 12)
        self.set_fill_color(210, 225, 255)
        self.cell(0, 8, text, fill=True)
        self.ln(9)

    def section_body(self, text: str):
        self.set_font("Arial", "", 11)
        self.multi_cell(0, 6, text)
        self.ln(1)

def main():
    pdf = Sheet(orientation="P", unit="mm", format="A4")
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.add_page()

    # Section: Principles
    pdf.section_title("Principles")
    pdf.section_body(clean_text(PRINCIPLES_TEXT))

    # Section: Carver's Reminder (quote)
    pdf.section_title("Carver's Reminder")
    pdf.set_font("Arial", "I", 11)
    pdf.multi_cell(0, 6, clean_text(CARVER_QUOTE))

    # Save
    pdf.output(OUTPUT_PATH)
    print(f"Saved: {os.path.abspath(OUTPUT_PATH)}")

if __name__ == "__main__":
    main()
