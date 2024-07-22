import sys
import json

def calculate(data):
    # 두 수를 파싱하여 합을 계산합니다.
    a = data['a']
    b = data['b']
    result = a + b
    return {"result": result, "error": None}

if __name__ == "__main__":
    # 표준 입력에서 데이터를 읽습니다.
    input_data = sys.stdin.read()
    data = json.loads(input_data)
    
    # 수식을 계산합니다.
    result = calculate(data)
    
    # 결과를 JSON 형식으로 표준 출력에 씁니다.
    print(json.dumps(result))
