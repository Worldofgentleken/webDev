import sys
import json
import joblib
import os

sys.stdout.reconfigure(encoding='utf-8')

# 현재 스크립트 파일의 디렉토리를 가져옵니다.
if getattr(sys, 'frozen', False):
    # PyInstaller로 패키징된 실행 파일에서 실행 중인 경우
    model_dir = os.path.dirname(sys.executable)
else:
    # 일반 파이썬 인터프리터에서 실행 중인 경우
    model_dir = os.path.dirname(os.path.abspath(__file__))

# 모델 파일의 전체 경로를 만듭니다.
model_path = os.path.join(model_dir, 'iris_model.pkl')

# 저장된 모델 불러오기
clf = joblib.load(model_path)

# 붓꽃 종류
iris_types = ['setosa', 'versicolor', 'virginica']

def predict(data):
    # 새로운 데이터로 예측
    predictions = clf.predict(data)
    result = [iris_types[p] for p in predictions]
    return result

def print_usage():
    usage = """
    사용법:
        python irispredict.py "{\\"sepal_length\\": 5.1, \\"sepal_width\\": 3.5, \\"petal_length\\": 1.4, \\"petal_width\\": 0.2}"
    또는
        echo {"sepal_length": 5.1, "sepal_width": 3.5, "petal_length": 1.4, "petal_width": 0.2} | python irispredict.py
    """
    print(usage)

if __name__ == "__main__":
    if len(sys.argv) > 1:
        input_data = sys.argv[1]
    else:
        # 표준 입력에서 데이터를 읽습니다.
        input_data = sys.stdin.read()

    if input_data in ["-h", "--help"]:
        print_usage()
        sys.exit(0)

    try:
        print('받은 데이터:', input_data)
        data = json.loads(input_data)
        print('JSON으로 변환:', data)

        # 입력 데이터를 2차원 배열 형식으로 변환
        features = [[data['sepal_length'], data['sepal_width'], data['petal_length'], data['petal_width']]]
        print('2차원 배열 형식으로 변환:', features)

        # 예측 수행
        result = predict(features)
        print('예측 결과:', result)

        # 결과를 JSON 형식으로 표준 출력에 씁니다.
        print(json.dumps(result))
    except Exception as e:
        print("입력 데이터를 처리하는 중 오류가 발생했습니다. 형식이 올바른지 확인하세요.")
        print_usage()
        sys.exit(1)
