import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_gradient_mask(width, height, top_alpha=0, bottom_alpha=200):
    mask = Image.new('L', (width, height), color=0)
    for y in range(height):
        # Quadratic or cubic ease for smooth transition in lower 60%
        factor = max(0.0, (y - height * 0.35) / (height * 0.65))
        alpha = int(top_alpha + (bottom_alpha - top_alpha) * (factor ** 1.5))
        alpha = min(255, max(0, alpha))
        for x in range(width):
            mask.putpixel((x, y), alpha)
    return mask

def add_corner_pill(draw, text, x, y, bg_color=(14, 83, 44), text_color=(255, 255, 255), font=None):
    # Calculate text bounding box
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    pad_x = 12
    pad_y = 6
    pill_w = tw + pad_x * 2
    pill_h = th + pad_y * 2
    # Draw rounded rectangle
    draw.rounded_rectangle([x, y, x + pill_w, y + pill_h], radius=14, fill=bg_color, outline=(255, 255, 255, 120), width=1)
    draw.text((x + pad_x, y + pad_y - 1), text, fill=text_color, font=font)

def main():
    target_dir = r"E:\My Projects\Devson\public\assets\offices"
    os.makedirs(target_dir, exist_ok=True)
    
    font_path_bold = r"C:\Windows\Fonts\segoeuib.ttf"
    font_path_reg = r"C:\Windows\Fonts\segoeui.ttf"
    
    title_font = ImageFont.truetype(font_path_bold, 28)
    subtitle_font = ImageFont.truetype(font_path_reg, 16)
    badge_font = ImageFont.truetype(font_path_bold, 13)
    
    devson_logo_path = r"E:\My Projects\Devson\public\assets\logos\devson-logo.png"
    devson_logo = Image.open(devson_logo_path).convert("RGBA") if os.path.exists(devson_logo_path) else None
    
    sbi_logo_path = r"E:\My Projects\Devson\public\assets\logos\clients\sbi.png"
    sbi_logo = Image.open(sbi_logo_path).convert("RGBA") if os.path.exists(sbi_logo_path) else None
    
    # --- 1. RAJGIR HEAD OFFICE ---
    print("Generating Rajgir Head Office image...")
    src_rajgir = os.path.join(target_dir, "office_building_1.jpg")
    img_rajgir = Image.open(src_rajgir).convert("RGBA")
    
    target_w, target_h = 800, 450
    src_w, src_h = img_rajgir.size
    aspect_target = target_w / target_h
    aspect_src = src_w / src_h
    
    if aspect_src > aspect_target:
        new_w = int(src_h * aspect_target)
        crop_box = ((src_w - new_w) // 2, 0, (src_w + new_w) // 2, src_h)
    else:
        new_h = int(src_w / aspect_target)
        crop_box = (0, (src_h - new_h) // 2, src_w, (src_h + new_h) // 2)
    
    cropped_rajgir = img_rajgir.crop(crop_box).resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # Subtle vignette at top right and bottom for framing
    comp_rajgir = cropped_rajgir.copy()
    if devson_logo:
        logo_thumb = devson_logo.copy()
        logo_thumb.thumbnail((58, 58), Image.Resampling.LANCZOS)
        disc = Image.new("RGBA", (66, 66), (255, 255, 255, 240))
        mask_disc = Image.new("L", (66, 66), 0)
        draw_disc = ImageDraw.Draw(mask_disc)
        draw_disc.ellipse((0, 0, 65, 65), fill=255)
        disc.putalpha(mask_disc)
        
        comp_rajgir.paste(disc, (target_w - 82, 16), disc)
        comp_rajgir.paste(logo_thumb, (target_w - 78, 20), logo_thumb)
    
    out_rajgir = os.path.join(target_dir, "rajgir-head-office.jpg")
    comp_rajgir.convert("RGB").save(out_rajgir, "JPEG", quality=92)
    print(f"Saved: {out_rajgir}")
    
    # --- 2. NAWADA BRANCH OFFICE ---
    print("Generating Nawada Branch Office image...")
    src_nawada = os.path.join(target_dir, "candidate5.jpg")
    img_nawada = Image.open(src_nawada).convert("RGBA")
    
    src_w, src_h = img_nawada.size
    aspect_src = src_w / src_h
    if aspect_src > aspect_target:
        new_w = int(src_h * aspect_target)
        crop_box = ((src_w - new_w) // 2, 0, (src_w + new_w) // 2, src_h)
    else:
        new_h = int(src_w / aspect_target)
        crop_box = (0, (src_h - new_h) // 2, src_w, (src_h + new_h) // 2)
    
    cropped_nawada = img_nawada.crop(crop_box).resize((target_w, target_h), Image.Resampling.LANCZOS)
    comp_nawada = cropped_nawada.copy()
    
    if devson_logo:
        comp_nawada.paste(disc, (target_w - 82, 16), disc)
        comp_nawada.paste(logo_thumb, (target_w - 78, 20), logo_thumb)
    
    out_nawada = os.path.join(target_dir, "nawada-branch-office.jpg")
    comp_nawada.convert("RGB").save(out_nawada, "JPEG", quality=92)
    print(f"Saved: {out_nawada}")
    
    # --- 3. STATE BANK OF INDIA BANKING ---
    print("Generating SBI Banking image...")
    src_sbi = os.path.join(target_dir, "sbi-branch.jpg")
    img_sbi = Image.open(src_sbi).convert("RGBA")
    
    src_w, src_h = img_sbi.size
    aspect_src = src_w / src_h
    if aspect_src > aspect_target:
        new_w = int(src_h * aspect_target)
        crop_box = ((src_w - new_w) // 2, int(src_h * 0.05), (src_w + new_w) // 2, int(src_h * 0.05) + int(new_w / aspect_target))
    else:
        new_h = int(src_w / aspect_target)
        crop_box = (0, 0, src_w, new_h)
        
    cropped_sbi = img_sbi.crop(crop_box).resize((target_w, target_h), Image.Resampling.LANCZOS)
    comp_sbi = cropped_sbi.copy()
    
    if sbi_logo:
        sbi_thumb = sbi_logo.copy()
        sbi_thumb.thumbnail((72, 50), Image.Resampling.LANCZOS)
        sbi_badge = Image.new("RGBA", (82, 60), (255, 255, 255, 245))
        mask_sbi = Image.new("L", (82, 60), 0)
        draw_sbi_b = ImageDraw.Draw(mask_sbi)
        draw_sbi_b.rounded_rectangle((0, 0, 81, 59), radius=10, fill=255)
        sbi_badge.putalpha(mask_sbi)
        
        comp_sbi.paste(sbi_badge, (target_w - 96, 16), sbi_badge)
        sbi_x = target_w - 96 + (82 - sbi_thumb.width) // 2
        sbi_y = 16 + (60 - sbi_thumb.height) // 2
        comp_sbi.paste(sbi_thumb, (sbi_x, sbi_y), sbi_thumb)
        
    out_sbi = os.path.join(target_dir, "sbi-banking-partner.jpg")
    comp_sbi.convert("RGB").save(out_sbi, "JPEG", quality=92)
    print(f"Saved: {out_sbi}")

if __name__ == "__main__":
    main()
