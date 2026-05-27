import urllib.request
import os

def download_image(url, filename):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    req = urllib.request.Request(url, headers=headers)
    try:
        print(f"Downloading {filename} from {url[:50]}...")
        with urllib.request.urlopen(req, timeout=15) as response:
            with open(filename, 'wb') as out_file:
                out_file.write(response.read())
        print(f"Successfully saved {filename}")
    except Exception as e:
        print(f"Error downloading {filename}: {e}")

backgrounds = {
    "img/bg_hero.jpg": "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1920&q=80",
    "img/bg_services.jpg": "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1920&q=80",
    "img/bg_products.jpg": "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1920&q=80",
    "img/bg_promotions.jpg": "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1920&q=80",
    "img/bg_why_us.jpg": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1920&q=80",
    "img/bg_testimonials.jpg": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80",
    "img/bg_contact.jpg": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1920&q=80"
}

def main():
    os.makedirs("img", exist_ok=True)
    for path, url in backgrounds.items():
        download_image(url, path)

if __name__ == '__main__':
    main()
